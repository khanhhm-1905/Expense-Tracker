// AI-generated code by GitHub Copilot - Start
'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import type { TransactionWithCategory } from '@/types'
import { format, parseISO } from 'date-fns'

export default function TransactionChart({ transactions }: { transactions: any[] }) {
  // Group transactions by date
  const chartData = transactions.reduce((acc, transaction) => {
    const date = format(parseISO(transaction.date), 'dd/MM')
    const existing = acc.find((item: any) => item.date === date)
    
    if (existing) {
      if (transaction.type === 'income') {
        existing.income += Number(transaction.amount)
      } else {
        existing.expense += Number(transaction.amount)
      }
    } else {
      acc.push({
        date,
        income: transaction.type === 'income' ? Number(transaction.amount) : 0,
        expense: transaction.type === 'expense' ? Number(transaction.amount) : 0,
      })
    }
    
    return acc
  }, [])

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Biểu đồ thu chi</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#10B981" name="Thu" />
          <Line type="monotone" dataKey="expense" stroke="#EF4444" name="Chi" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
// AI-generated code by GitHub Copilot - End
