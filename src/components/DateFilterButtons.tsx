// AI-generated code by GitHub Copilot - Start
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'

const filters = [
  { label: 'Hôm nay', value: 'day' },
  { label: 'Tuần này', value: 'week' },
  { label: 'Tháng này', value: 'month' },
  { label: 'Năm này', value: 'year' },
  { label: 'Tất cả', value: 'all' },
]

function DateFilterButtonsContent({ currentFilter }: { currentFilter: string }) {
  const pathname = usePathname()

  return (
    <div className="flex gap-2 mb-8 flex-wrap">
      {filters.map(filter => (
        <Link
          key={filter.value}
          href={`${pathname}?filter=${filter.value}`}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentFilter === filter.value
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {filter.label}
        </Link>
      ))}
    </div>
  )
}

export default function DateFilterButtons({ currentFilter }: { currentFilter: string }) {
  return (
    <Suspense fallback={
      <div className="flex gap-2 mb-8 flex-wrap">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="h-10 w-24 bg-gray-200 rounded-lg skeleton"></div>
        ))}
      </div>
    }>
      <DateFilterButtonsContent currentFilter={currentFilter} />
    </Suspense>
  )
}
// AI-generated code by GitHub Copilot - End
