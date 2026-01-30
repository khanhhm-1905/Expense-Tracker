// AI-generated code by GitHub Copilot - Start
'use client'

import { useState } from 'react'
import type { Category } from '@/types'
import TransactionModal from './TransactionModal'

export default function AddTransactionButton({ 
  categories 
}: { 
  categories: Category[] 
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
      >
        + Thêm giao dịch
      </button>

      {isOpen && (
        <TransactionModal
          categories={categories}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
// AI-generated code by GitHub Copilot - End
