'use client'

import { Filter } from '@beborn/components/filter'
import { useEffect, useState } from 'react'

export const FilterWrapper = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className='mb-6 space-y-4'>
        {/* 탭 스켈레톤 */}
        <div className='flex justify-center lg:justify-center'>
          <div className='h-9 w-full animate-pulse rounded-full bg-gray-200 lg:w-auto' />
        </div>
        {/* 필터 스켈레톤 */}
        <div className='h-32 animate-pulse rounded-lg bg-gray-100' />
      </div>
    )
  }

  return <Filter />
}


