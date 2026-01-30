import { getTransactions, getCategories } from '../actions'
import TransactionList from '@/components/TransactionList'
import TransactionFilters from '@/components/TransactionFilters'
import AddTransactionButton from '@/components/AddTransactionButton'
import ExportButton from '@/components/ExportButton'

export default async function TransactionsPage({
  searchParams,
}: {
  searchParams: {
    startDate?: string
    endDate?: string
    categoryId?: string
    type?: 'income' | 'expense'
    search?: string
  }
}) {
  const [transactions, categories] = await Promise.all([
    getTransactions(searchParams),
    getCategories(),
  ])

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Giao dịch</h1>
            <p className="text-gray-600">
              Tổng {transactions.length} giao dịch
            </p>
          </div>
          <div className="flex gap-4">
            <ExportButton filters={searchParams} />
            <AddTransactionButton categories={categories} />
          </div>
        </div>

        <TransactionFilters categories={categories} />

        <TransactionList transactions={transactions} categories={categories} />
      </div>
    </div>
  )
}
