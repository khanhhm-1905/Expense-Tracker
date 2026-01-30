// Types for database tables
export type Transaction = {
  id: string
  user_id: string
  category_id: string
  type: 'income' | 'expense'
  amount: number
  description: string
  date: string
  created_at: string
  updated_at: string
}

export type Category = {
  id: string
  user_id: string
  name: string
  icon: string
  color: string
  type: 'income' | 'expense'
  created_at: string
}

export type TransactionWithCategory = Transaction & {
  category: Category
}

export type DateFilter = 'day' | 'week' | 'month' | 'year' | 'all'

export type DashboardStats = {
  totalIncome: number
  totalExpense: number
  balance: number
  transactionCount: number
}
