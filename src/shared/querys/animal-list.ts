import { selectPetList } from '@beborn/controller/pet-controller'
import { AnimallKey, PAGE_LIMIT } from '@beborn/shared/constants'
import { IPetParams, ISelectPetList } from '@beborn/shared/interfaces/list'
import { useInfiniteQuery } from '@tanstack/react-query'

import { dateFormatYYYYMMDD } from '..'

export const usePetList = (props: ISelectPetList) => {
  const { page = 1 } = props

  const getPetList = ({
    startDate,
    endDate,
    upKind,
    sido,
    sigungu,
    kind,
    page = 1
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
      state: 'notice',
      neuterYn: 'Y'
    }
    // console.log('params', params)
    // dispatch(setParam(params))
    // return
    return selectPetList(params)
  }

  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [AnimallKey.ANIMAL_MOBILE_LIST, { ...props }],
    queryFn: ({ pageParam }) => {
      return getPetList({
        ...props,
        page: pageParam || page
      })
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || !lastPage.total) return undefined

      const { total } = lastPage
      const currentPage = allPages.length
      const hasMore = currentPage * PAGE_LIMIT < total

      return hasMore ? currentPage + 1 : undefined
    },
    staleTime: 1000 * 60 * 5, // 5분간 데이터를 fresh 상태로 유지
    gcTime: 1000 * 60 * 30 // 30분간 캐시 유지
  })
}
