// AI-generated code by GitHub Copilot - Start
import { format, parseISO } from 'date-fns'
import type { TransactionWithCategory } from '@/types'

export default function RecentTransactions({ 
  transactions 
}: { 
  transactions: any[] 
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Giao dịch gần đây</h2>
      <div className="space-y-4">
        {transactions.map(transaction => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{transaction.category.icon}</span>
              <div>
                <div className="font-medium">{transaction.category.name}</div>
                <div className="text-sm text-gray-500">
                  {transaction.description || 'Không có mô tả'}
                </div>
                <div className="text-xs text-gray-400">
                  {format(parseISO(transaction.date), 'dd/MM/yyyy')}
                </div>
              </div>
            </div>
            <div className={`text-lg font-semibold ${
              transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.type === 'income' ? '+' : '-'}
              {Number(transaction.amount).toLocaleString('vi-VN')} đ
            </div>
          </div>
        ))}
        {transactions.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            Chưa có giao dịch nào
          </p>
        )}
      </div>
    </div>
  )
}
// AI-generated code by GitHub Copilot - End
