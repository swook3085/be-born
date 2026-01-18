'use client'

import { AnimalItem } from '@beborn/components/list/item'
import { AnimalItemSkelton } from '@beborn/components/list/skeleton'
import { usePetList } from '@beborn/shared/querys/animal-list'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

// 날짜 기본값 함수
const getToday = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}

const getDateBefore30Days = () => {
  const date = new Date()
  date.setDate(date.getDate() - 30)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}

export const AnimalList = () => {
  const searchParams = useSearchParams()
  const initialSkeletonArray = useRef(Array.from({ length: 20 })).current
  const loadingSkeletonArray = useRef(Array.from({ length: 4 })).current
  const observerTarget = useRef<HTMLDivElement>(null)

  // URL에서 필터 파라미터 읽기
  const upKind = searchParams.get('upKind') || ''
  const kind = searchParams.get('kind') || ''
  const sido = searchParams.get('sido') || ''
  const startDate = searchParams.get('startDate') || getDateBefore30Days()
  const endDate = searchParams.get('endDate') || getToday()

  const sigungu = searchParams.get('sigungu') || ''

  const {
    data,
    isLoading,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = usePetList({
    startDate,
    endDate,
    upKind,
    kind,
    sido,
    sigungu,
    page: 1
  })

  const isListLoading = isLoading || status === 'pending'
  const animalList = data?.pages?.flatMap((page) => page?.list) || []
  const total = data?.pages?.[0]?.total || 0

  // Intersection Observer로 무한 스크롤 구현
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      <ul className='grid auto-cols-max grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 lg:grid-cols-4'>
        {isListLoading
          ? initialSkeletonArray.map((_data, i) => (
              <AnimalItemSkelton key={i} />
            ))
          : animalList.map((item, index) => (
              <AnimalItem
                key={`${item.noticeNo}-${index}`}
                item={item}
                index={index}
              />
            ))}

        {/* 무한 스크롤 로딩 스켈레톤 */}
        {!isListLoading &&
          isFetchingNextPage &&
          loadingSkeletonArray.map((_data, i) => (
            <AnimalItemSkelton key={`loading-${i}`} />
          ))}
      </ul>

      {/* 무한 스크롤 트리거 */}
      {hasNextPage && !isListLoading && (
        <div ref={observerTarget} className='h-10' />
      )}

      {/* 검색 결과가 없을 때 */}
      {!isListLoading && animalList.length === 0 && (
        <div className='py-20 text-center'>
          <p className='text-lg font-medium text-gray-700'>
            검색 결과가 없습니다
          </p>
          <p className='mt-2 text-sm text-gray-500'>
            다른 조건으로 검색해보세요
          </p>
        </div>
      )}
    </>
  )
}
