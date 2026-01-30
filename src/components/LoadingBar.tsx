// AI-generated code by GitHub Copilot - Start
'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function LoadingBarContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Show loading bar when route changes
    const handleStart = () => {
      const loadingBar = document.getElementById('loading-bar')
      if (loadingBar) {
        loadingBar.style.width = '0%'
        loadingBar.style.opacity = '1'
        setTimeout(() => {
          loadingBar.style.width = '70%'
        }, 100)
      }
    }

    const handleComplete = () => {
      const loadingBar = document.getElementById('loading-bar')
      if (loadingBar) {
        loadingBar.style.width = '100%'
        setTimeout(() => {
          loadingBar.style.opacity = '0'
        }, 200)
      }
    }

    handleStart()
    const timeout = setTimeout(handleComplete, 500)

    return () => clearTimeout(timeout)
  }, [pathname, searchParams])

  return null
}

export default function LoadingBar() {
  return (
    <>
      <div
        id="loading-bar"
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 transition-all duration-500 ease-out z-50"
        style={{ width: '0%', opacity: 0 }}
      />
      <Suspense fallback={null}>
        <LoadingBarContent />
      </Suspense>
    </>
  )
}
// AI-generated code by GitHub Copilot - End
