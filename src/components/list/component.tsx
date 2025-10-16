'use client'

import { AnimalItem } from '@beborn/components/list/item'
import { AnimalItemSkelton } from '@beborn/components/list/skeleton'
import { usePetList } from '@beborn/shared/querys/animal-list'
import { useSearchParams } from 'next/navigation'
import { useRef } from 'react'

import { Pagination } from '../pagination'

export const AnimalList = () => {
  const searchParams = useSearchParams()
  const skeletonArray = useRef(Array.from({ length: 20 })).current
  // const { startDate, endDate, upKind, kind, sido, sigungu, page } = useSelector<
  //   ReducerType,
  //   ISearchFilter
  // >((state) => state.sliceSearchFilter)
  // const dispatch = useDispatch()
  const { data, isLoading, status, fetchNextPage } = usePetList({
    startDate: '2024.08.01',
    endDate: '2024.08.31',
    upKind: '422400',
    kind: '000116',
    sido: '6500000',
    sigungu: '6510000',
    page: Number(searchParams.get('page') || 1)
  })

  const isListLoading = isLoading || status === 'pending'
  console.log('data', data)
  const animalList = data?.pages?.flatMap((page) => page?.list) || []
  const total = data?.pages?.[0]?.total || 0

  return (
    <>
      <ul className='grid auto-cols-max grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:grid-cols-4'>
        {isListLoading
          ? skeletonArray.map((_data, i) => <AnimalItemSkelton key={i} />)
          : animalList.map((item, index) => (
              <AnimalItem key={item.noticeNo} item={item} index={index} />
            ))}
      </ul>
      <button onClick={() => fetchNextPage()}>fetchNextPage</button>
      <div className='mt-10 hidden md:block lg:block'>
        <Pagination total={total} />
      </div>
    </>
  )
}
