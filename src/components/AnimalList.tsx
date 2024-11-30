'use client'

import { usePagiPetList } from '@beborn/shared/querys/animal-list'
import { useRef } from 'react'

import PcAnimalItem from './PcAnimalItem'
import PAnimalItemSkl from './skeleton/PAnimalItemSkl'

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
      <div className='grid columns-3xs grid-cols-4 gap-x-12 gap-y-8'>
        {isFetching
          ? skeletonArray.map((_data, i) => <PAnimalItemSkl key={i} />)
          : animalList.map((item, index) => (
              <PcAnimalItem key={item.noticeNo} item={item} index={index} />
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
