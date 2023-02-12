import { useQueryClient } from 'react-query'
import DateFilter from './DateFilter'
import KindContainer from './KindFilter'
import SidoSigunguContainer from './SidoSigunguFilter'
import { useDispatch, useSelector } from 'react-redux'
import { ReducerType } from '@modules/store/rootReducer'
import {
  ISearchFilter,
  setData,
  setPage,
} from '@modules/store/slices/searchFilter'
import { onClose } from '@modules/store/slices/slideModal'
import { AnimallKey } from '@shared/queryKey'
import useDevice from '@shared/hooks/useDevice'

const FilterContainer = () => {
  const { isPc } = useDevice()
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const { _startDate, _endDate, _upKind, _kind, _sido, _sigungu } = useSelector<
    ReducerType,
    ISearchFilter
  >((state) => state.sliceSearchFilter)

  /**
   * 유기동물 조회
   */
  const onClick = () => {
    const data = {
      startDate: _startDate,
      endDate: _endDate,
      kind: _kind,
      upKind: _upKind,
      sido: _sido,
      sigungu: _sigungu,
      page: 1,
    }
    //* 검색 조건 store upate
    dispatch(setData(data))
    //* 검색 팝업 종료
    dispatch(onClose())
    if (isPc) {
      dispatch(setPage(1))
      return
    }
    //* 기존 query 삭제
    queryClient.removeQueries(AnimallKey.ANIMAL_MOBILE_LIST)
    //* query 재호출
    queryClient.invalidateQueries(AnimallKey.ANIMAL_MOBILE_LIST)
  }
  return (
    <>
      <KindContainer />
      <SidoSigunguContainer />
      <DateFilter />
      <div className='w-full rounded-md px-4 py-6 lg:py-4'>
        <button
          onClick={onClick}
          className='inline-flex rounded-md w-full h-full items-center justify-center border border-transparent bg-[#ECB04D] px-5 py-3 text-base font-medium text-white'
        >
          검색
        </button>
      </div>
    </>
  )
}

export default FilterContainer
