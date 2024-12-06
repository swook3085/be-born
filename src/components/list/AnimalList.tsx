'use client'

import { usePagiPetList } from '@beborn/shared/querys/animal-list'
import { useRef } from 'react'

import AnimalItem from './AnimalItem'
import AnimalItemSkelton from './AnimalItemSkelton'

const AnimalList = () => {
  const skeletonArray = useRef(Array.from({ length: 20 })).current
  // const { startDate, endDate, upKind, kind, sido, sigungu, page } = useSelector<
  //   ReducerType,
  //   ISearchFilter
  // >((state) => state.sliceSearchFilter)
  // const dispatch = useDispatch()
  const { data, isFetching, isLoading } = usePagiPetList({
    startDate: '2024.08.01',
    endDate: '2024.08.31',
    upKind: '422400',
    kind: '000116',
    sido: '6500000',
    sigungu: '6510000',
    page: 1
  })
  const animalList = data?.list || []
  const total = data?.total || 0

  return (
    <>
      <div className='grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-5'>
        {isFetching
          ? skeletonArray.map((_data, i) => <AnimalItemSkelton key={i} />)
          : animalList.map((item, index) => (
              <AnimalItem key={item.noticeNo} item={item} index={index} />
            ))}
      </div>
      {/* <div className='mt-4'> */}
      {/* <Pagination
          total={total}
          page={page}
          onPageChange={(page) => dispatch(setPage(page))}
        /> */}
      {/* </div> */}
    </>
  )
}

export default AnimalList
