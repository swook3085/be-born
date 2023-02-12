import { ReducerType } from '@modules/store/rootReducer'
import { ISearchFilter } from '@modules/store/slices/searchFilter'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { useMemo } from 'react'
import { usePetList } from '@shared/query/useAnimalList'
import AnimalItem from './AnimalItemContainer'
import { PAGE_LIMIT } from '@shared/constants'
import MAnimalItemSkl from '@components/skeleton/MAnimalItemSkl'

const MobileAnimalList = () => {
  const { ref, inView } = useInView()
  const { startDate, endDate, upKind, kind, sido, sigungu } = useSelector<
    ReducerType,
    ISearchFilter
  >((state) => state.sliceSearchFilter)
  const skeletonArray = useRef(Array.from({ length: 10 })).current

  const { data, fetchNextPage, isFetching } = usePetList({
    startDate,
    endDate,
    upKind,
    kind,
    sido,
    sigungu,
  })

  const animalList =
    useMemo(() => {
      return data?.pages.flatMap((page) => {
        return page.list.map((item) => {
          return {
            ...item,
            page: page.page,
          }
        })
      })
    }, [data?.pages]) || []

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView])

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='columns-3xs grid grid-cols-1 lg:gap-y-4 gap-x-6 lg:grid-cols-4 xl:gap-x-8 lg:gap-y-8'>
          {animalList.map((item) => (
            <AnimalItem
              key={item.noticeNo}
              {...item}
              ref={
                data
                  ? data.pages.length * PAGE_LIMIT === animalList.length
                    ? ref
                    : null
                  : null
              }
            />
          ))}
          {isFetching
            ? skeletonArray.map((_data, i) => <MAnimalItemSkl key={i} />)
            : null}
        </div>
      </div>
    </div>
  )
}

export default MobileAnimalList
