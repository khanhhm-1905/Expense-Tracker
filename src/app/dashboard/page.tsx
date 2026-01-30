import { getDashboardStats, getTransactions, getCategories } from '../actions'
import { format, startOfDay, startOfWeek, startOfMonth, startOfYear } from 'date-fns'
import StatsCards from '@/components/StatsCards'
import TransactionChart from '@/components/TransactionChart'
import RecentTransactions from '@/components/RecentTransactions'
import DateFilterButtons from '@/components/DateFilterButtons'

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { filter?: string }
}) {
  const filter = searchParams.filter || 'month'
  
  // Calculate date range based on filter
  const now = new Date()
  let startDate: string | undefined
  
  switch (filter) {
    case 'day':
      startDate = format(startOfDay(now), 'yyyy-MM-dd')
      break
    case 'week':
      startDate = format(startOfWeek(now), 'yyyy-MM-dd')
      break
    case 'month':
      startDate = format(startOfMonth(now), 'yyyy-MM-dd')
      break
    case 'year':
      startDate = format(startOfYear(now), 'yyyy-MM-dd')
      break
    default:
      startDate = undefined
  }

  const endDate = format(now, 'yyyy-MM-dd')

  const [stats, transactions, categories] = await Promise.all([
    getDashboardStats(startDate, endDate),
    getTransactions({ startDate, endDate }),
    getCategories(),
  ])

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Tổng quan thu chi của bạn</p>
        </div>

        <DateFilterButtons currentFilter={filter} />

        <StatsCards stats={stats} />

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <TransactionChart transactions={transactions} />
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Phân bố theo danh mục</h2>
            <div className="space-y-3">
              {categories.slice(0, 5).map(category => {
                const categoryTransactions = transactions.filter(
                  t => t.category.id === category.id
                )
                const total = categoryTransactions.reduce(
                  (sum, t) => sum + Number(t.amount), 
                  0
                )
                
                return (
                  <div key={category.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`font-semibold ${
                      category.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {category.type === 'income' ? '+' : '-'}
                      {total.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <RecentTransactions transactions={transactions.slice(0, 10)} />
      </div>
    </div>
  )
}
