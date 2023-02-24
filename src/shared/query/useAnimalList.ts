import { IPetParams, ISelectPetList } from '@shared/interface/IPet'
import { AnimallKey, dateFormatYYYYMMDD } from '..'
import { selectPetList } from '@controller/petController'
import { useInfiniteQuery, useQuery } from 'react-query'
import { PAGE_LIMIT } from '@shared/constants'
import { useDispatch } from 'react-redux'
import { setParam } from '@modules/store/slices/detailParam'

export const usePetList = (props: ISelectPetList) => {
  const dispatch = useDispatch()
  const getPetList = async ({
    startDate,
    endDate,
    upKind,
    sido,
    sigungu,
    kind,
    page = 1,
  }: ISelectPetList) => {
    const params: IPetParams = {
      bgnde: dateFormatYYYYMMDD(startDate),
      endde: dateFormatYYYYMMDD(endDate),
      upKind: upKind === '0' ? '' : upKind,
      uprCd: sido,
      orgCd: sigungu,
      kind,
      page,
      limit: PAGE_LIMIT.toString(),
      state: '',
    }
    // console.log('params', params)
    dispatch(setParam(params))
    return await selectPetList(params)
  }

  return useInfiniteQuery(
    [AnimallKey.ANIMAL_MOBILE_LIST, { ...props }],
    async ({ pageParam = 1 }) => {
      return await getPetList({
        ...props,
        page: pageParam,
      })
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const { total } = lastPage
        // 다음 페이지 요청에 사용될 pageParam값 return 하기
        return allPages.length * PAGE_LIMIT > total
          ? undefined
          : allPages.length + 1
      },
    },
  )
}

export const usePagiPetList = (props: ISelectPetList) => {
  const dispatch = useDispatch()
  const getPetList = async ({
    startDate,
    endDate,
    upKind,
    sido,
    sigungu,
    kind,
    page = 1,
  }: ISelectPetList) => {
    const params: IPetParams = {
      bgnde: dateFormatYYYYMMDD(startDate),
      endde: dateFormatYYYYMMDD(endDate),
      upKind: upKind === '0' ? '' : upKind,
      uprCd: sido,
      orgCd: sigungu,
      kind,
      page,
      limit: PAGE_LIMIT.toString(),
      state: '',
    }
    // console.log('params', params)
    dispatch(setParam(params))
    return await selectPetList(params)
  }

  return useQuery(
    [AnimallKey.ANIMAL_PC_LIST, { ...props }],
    async () => await getPetList(props),
    {
      keepPreviousData: true,
    },
  )
}
