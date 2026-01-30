'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import type { Transaction, Category } from '@/types'

// Transaction Actions
export async function getTransactions(filters?: {
  startDate?: string
  endDate?: string
  categoryId?: string
  type?: 'income' | 'expense'
  search?: string
}) {
  const supabase = await createClient()
  
  let query = supabase
    .from('transactions')
    .select(`
      *,
      category:categories(*)
    `)
    .order('date', { ascending: false })

  if (filters?.startDate) {
    query = query.gte('date', filters.startDate)
  }
  if (filters?.endDate) {
    query = query.lte('date', filters.endDate)
  }
  if (filters?.categoryId) {
    query = query.eq('category_id', filters.categoryId)
  }
  if (filters?.type) {
    query = query.eq('type', filters.type)
  }
  if (filters?.search) {
    query = query.ilike('description', `%${filters.search}%`)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}

export async function createTransaction(formData: FormData) {
  const supabase = await createClient()

  const transaction = {
    user_id: '00000000-0000-0000-0000-000000000000', // Demo user
    category_id: formData.get('category_id') as string,
    type: formData.get('type') as 'income' | 'expense',
    amount: parseFloat(formData.get('amount') as string),
    description: formData.get('description') as string,
    date: formData.get('date') as string,
  }

  const { error } = await supabase.from('transactions').insert(transaction)

  if (error) throw error
  revalidatePath('/transactions')
  revalidatePath('/dashboard')
}

export async function updateTransaction(id: string, formData: FormData) {
  const supabase = await createClient()

  const updates = {
    category_id: formData.get('category_id') as string,
    type: formData.get('type') as 'income' | 'expense',
    amount: parseFloat(formData.get('amount') as string),
    description: formData.get('description') as string,
    date: formData.get('date') as string,
  }

  const { error } = await supabase
    .from('transactions')
    .update(updates)
    .eq('id', id)

  if (error) throw error
  revalidatePath('/transactions')
  revalidatePath('/dashboard')
}

export async function deleteTransaction(id: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('transactions')
    .delete()
    .eq('id', id)

  if (error) throw error
  revalidatePath('/transactions')
  revalidatePath('/dashboard')
}

// Category Actions
export async function getCategories(type?: 'income' | 'expense') {
  const supabase = await createClient()

  let query = supabase
    .from('categories')
    .select('*')
    .order('name')

  if (type) {
    query = query.eq('type', type)
  }

  const { data, error } = await query

  if (error) throw error
  return data
}

export async function createCategory(formData: FormData) {
  const supabase = await createClient()

  const category = {
    user_id: '00000000-0000-0000-0000-000000000000', // Demo user
    name: formData.get('name') as string,
    icon: formData.get('icon') as string,
    color: formData.get('color') as string,
    type: formData.get('type') as 'income' | 'expense',
  }

  const { error } = await supabase.from('categories').insert(category)

  if (error) throw error
  revalidatePath('/categories')
}

// Dashboard Stats
export async function getDashboardStats(startDate?: string, endDate?: string) {
  const supabase = await createClient()

  let query = supabase
    .from('transactions')
    .select('type, amount')

  if (startDate) {
    query = query.gte('date', startDate)
  }
  if (endDate) {
    query = query.lte('date', endDate)
  }

  const { data, error } = await query

  if (error) throw error

  const stats = {
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    transactionCount: data.length,
  }

  data.forEach(transaction => {
    if (transaction.type === 'income') {
      stats.totalIncome += Number(transaction.amount)
    } else {
      stats.totalExpense += Number(transaction.amount)
    }
  })

  stats.balance = stats.totalIncome - stats.totalExpense

  return stats
}

// Export to CSV
export async function exportTransactionsToCSV(filters?: {
  startDate?: string
  endDate?: string
}) {
  const transactions = await getTransactions(filters)
  
  const headers = ['Date', 'Type', 'Category', 'Amount', 'Description']
  const rows = transactions.map(t => [
    t.date,
    t.type,
    t.category.name,
    t.amount,
    t.description || '',
  ])

  const csv = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n')

  return csv
}
