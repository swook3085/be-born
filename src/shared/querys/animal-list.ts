import { selectPetList } from '@beborn/controller/pet-controller'
import { AnimallKey, PAGE_LIMIT } from '@beborn/shared/constants'
import { IPetParams, ISelectPetList } from '@beborn/shared/interfaces/IPet'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { dateFormatYYYYMMDD } from '..'

// import { selectPetList } from '@beborn/controller'

export const usePetList = (props: ISelectPetList) => {
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
      state: 'notice'
    }
    // console.log('params', params)
    // dispatch(setParam(params))
    // return selectPetList(params)
    return {}
  }

  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [AnimallKey.ANIMAL_MOBILE_LIST, { ...props }],
    queryFn: ({ pageParam = 1 }) => {
      return getPetList({
        ...props,
        page: pageParam
      })
    },
    getNextPageParam: (lastPage, allPages) => {
      // const { total } = lastPage
      // // 다음 페이지 요청에 사용될 pageParam값 return 하기
      // return allPages.length * PAGE_LIMIT > total
      //   ? undefined
      //   : allPages.length + 1
      return undefined
    }
  })
}

export const usePagiPetList = (props: ISelectPetList) => {
  const getPetList = async ({
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

  return useQuery({
    queryKey: [AnimallKey.ANIMAL_PC_LIST, { ...props }],
    queryFn: () => getPetList(props)
  })
}
