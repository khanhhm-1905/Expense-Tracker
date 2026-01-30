// AI-generated code by GitHub Copilot - Start
'use client'

import { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { Category } from '@/types'

function TransactionFiltersContent({ 
  categories 
}: { 
  categories: Category[] 
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4">Bộ lọc</h2>
      <div className="grid md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Từ ngày
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            defaultValue={searchParams.get('startDate') || ''}
            onChange={(e) => handleFilter('startDate', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Đến ngày
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            defaultValue={searchParams.get('endDate') || ''}
            onChange={(e) => handleFilter('endDate', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loại
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            defaultValue={searchParams.get('type') || ''}
            onChange={(e) => handleFilter('type', e.target.value)}
          >
            <option value="">Tất cả</option>
            <option value="income">Thu</option>
            <option value="expense">Chi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Danh mục
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            defaultValue={searchParams.get('categoryId') || ''}
            onChange={(e) => handleFilter('categoryId', e.target.value)}
          >
            <option value="">Tất cả</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tìm kiếm
          </label>
          <input
            type="text"
            placeholder="Mô tả..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            defaultValue={searchParams.get('search') || ''}
            onChange={(e) => handleFilter('search', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default function TransactionFilters({ 
  categories 
}: { 
  categories: Category[] 
}) {
  return (
    <Suspense fallback={
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="h-6 w-24 bg-gray-200 rounded skeleton mb-4"></div>
        <div className="grid md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-20 bg-gray-100 rounded-lg skeleton"></div>
          ))}
        </div>
      </div>
    }>
      <TransactionFiltersContent categories={categories} />
    </Suspense>
  )
}
// AI-generated code by GitHub Copilot - End
