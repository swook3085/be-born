import { ReducerType } from '@modules/store/rootReducer'
import { ISearchFilter, setPage } from '@modules/store/slices/searchFilter'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo, useRef } from 'react'
import { usePagiPetList } from '@shared/query/useAnimalList'
import AnimalItem from './AnimalItemContainer'
import Pagination from '@components/common/Pagination'
import PAnimalItemSkl from '@components/skeleton/PAnimalItemSkl'

const PcAnimalList = () => {
  const skeletonArray = useRef(Array.from({ length: 20 })).current
  const { startDate, endDate, upKind, kind, sido, sigungu, page } = useSelector<
    ReducerType,
    ISearchFilter
  >((state) => state.sliceSearchFilter)
  const dispatch = useDispatch()
  const { data, isFetching, isLoading } = usePagiPetList({
    startDate,
    endDate,
    upKind,
    kind,
    sido,
    sigungu,
    page,
  })
  const animalList = useMemo(() => data?.list, [data?.list]) || []
  const total = useMemo(() => data?.total, [data?.total]) || 0
  return (
    <div className='px-12 mx-auto'>
      <div className='columns-3xs grid grid-cols-1 grid-cols-4 gap-x-12 gap-y-8'>
        {isFetching
          ? skeletonArray.map((_data, i) => <PAnimalItemSkl key={i} />)
          : animalList.map((item) => (
              <AnimalItem key={item.noticeNo} {...item} page={page} />
            ))}
      </div>
      <div className='mt-4'>
        <Pagination
          total={total}
          page={page}
          onPageChange={(page) => dispatch(setPage(page))}
        />
      </div>
    </div>
  )
}

export default PcAnimalList
