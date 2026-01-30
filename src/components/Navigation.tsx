// AI-generated code by GitHub Copilot - Start
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useTransition } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const navItems = [
    { href: '/', label: '🏠 Trang chủ', icon: '🏠' },
    { href: '/dashboard', label: '📊 Dashboard', icon: '📊' },
    { href: '/transactions', label: '💳 Giao dịch', icon: '💳' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💰</span>
            <span className="font-bold text-xl text-gray-900">Expense Tracker</span>
          </div>
          
          <div className="flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${isActive(item.href)
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                  ${isPending ? 'opacity-50 pointer-events-none' : ''}
                `}
              >
                <span className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="hidden sm:inline">{item.label.split(' ')[1]}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {isPending && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
          <div className="h-full bg-primary-600 animate-pulse" style={{ width: '70%' }}></div>
        </div>
      )}
    </nav>
  )
}
// AI-generated code by GitHub Copilot - End
