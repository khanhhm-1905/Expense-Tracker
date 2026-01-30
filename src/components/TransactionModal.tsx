// AI-generated code by GitHub Copilot - Start
'use client'

import { useState, useEffect } from 'react'
import { createTransaction, updateTransaction } from '@/app/actions'
import type { Category, Transaction } from '@/types'
import { format } from 'date-fns'

export default function TransactionModal({
  transaction,
  categories,
  onClose,
}: {
  transaction?: any
  categories: Category[]
  onClose: () => void
}) {
  const [type, setType] = useState<'income' | 'expense'>(
    transaction?.type || 'expense'
  )

  const filteredCategories = categories.filter(c => c.type === type)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    try {
      if (transaction) {
        await updateTransaction(transaction.id, formData)
      } else {
        await createTransaction(formData)
      }
      onClose()
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại.')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          {transaction ? 'Sửa giao dịch' : 'Thêm giao dịch mới'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loại *
            </label>
            <div className="flex gap-4">
              <label className="flex items-center text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={type === 'income'}
                  onChange={(e) => setType(e.target.value as 'income' | 'expense')}
                  className="mr-2 w-4 h-4 cursor-pointer"
                />
                <span>Thu nhập</span>
              </label>
              <label className="flex items-center text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={type === 'expense'}
                  onChange={(e) => setType(e.target.value as 'income' | 'expense')}
                  className="mr-2 w-4 h-4 cursor-pointer"
                />
                <span>Chi tiêu</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Danh mục *
            </label>
            <select
              name="category_id"
              required
              defaultValue={transaction?.category_id}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white text-gray-900"
            >
              <option value="" className="text-gray-500">Chọn danh mục</option>
              {filteredCategories.map(category => (
                <option key={category.id} value={category.id} className="text-gray-900">
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Số tiền *
            </label>
            <input
              type="number"
              name="amount"
              required
              min="0"
              step="0.01"
              defaultValue={transaction?.amount}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white text-gray-900 placeholder-gray-400"
              placeholder="0"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mô tả
            </label>
            <textarea
              name="description"
              defaultValue={transaction?.description}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white text-gray-900 placeholder-gray-400"
              placeholder="Nhập mô tả..."
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ngày *
            </label>
            <input
              type="date"
              name="date"
              required
              defaultValue={transaction?.date || format(new Date(), 'yyyy-MM-dd')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white text-gray-900"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-semibold transition-colors"
            >
              {transaction ? 'Cập nhật' : 'Thêm'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold transition-colors"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
// AI-generated code by GitHub Copilot - End
