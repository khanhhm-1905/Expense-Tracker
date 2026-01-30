// AI-generated code by GitHub Copilot - Start
'use client'

import { exportTransactionsToCSV } from '@/app/actions'

export default function ExportButton({ 
  filters 
}: { 
  filters: {
    startDate?: string
    endDate?: string
  }
}) {
  const handleExport = async () => {
    try {
      const csv = await exportTransactionsToCSV(filters)
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `transactions_${new Date().toISOString()}.csv`
      link.click()
    } catch (error) {
      alert('Có lỗi khi export. Vui lòng thử lại.')
    }
  }

  return (
    <button
      onClick={handleExport}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
    >
      📥 Export CSV
    </button>
  )
}
// AI-generated code by GitHub Copilot - End
