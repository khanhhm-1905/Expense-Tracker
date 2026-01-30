// AI-generated code by GitHub Copilot - Start
import type { DashboardStats } from '@/types'

export default function StatsCards({ stats }: { stats: DashboardStats }) {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Tổng thu</span>
          <span className="text-2xl">📈</span>
        </div>
        <div className="text-2xl font-bold text-green-600">
          {stats.totalIncome.toLocaleString('vi-VN')} đ
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Tổng chi</span>
          <span className="text-2xl">📉</span>
        </div>
        <div className="text-2xl font-bold text-red-600">
          {stats.totalExpense.toLocaleString('vi-VN')} đ
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Số dư</span>
          <span className="text-2xl">💰</span>
        </div>
        <div className={`text-2xl font-bold ${
          stats.balance >= 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {stats.balance.toLocaleString('vi-VN')} đ
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">Giao dịch</span>
          <span className="text-2xl">📊</span>
        </div>
        <div className="text-2xl font-bold text-blue-600">
          {stats.transactionCount}
        </div>
      </div>
    </div>
  )
}
// AI-generated code by GitHub Copilot - End
