import http from '@http'
import {
  IAnimalListResponse,
  IKindParams,
  IPetParams,
  ISelectKindItem,
  ISidoItem,
  ISidoParams,
  ISigunguItem,
  ISigunguParams,
} from '@interface/IPet'
import { getSearchURL, getServiceURL } from '@shared/utils'
import axios from 'axios'

export const selectSidoList = async (params: ISidoParams) => {
  const url = getServiceURL('sido', params)
  const response = await http.get(url)
  try {
    const list: ISidoItem[] = response.data.response.body.items.item || []
    return list
  } catch (error) {
    return []
  }
}

export const selectSigunguList = async (params: ISigunguParams) => {
  const { uprCd } = params
  const url = getServiceURL('sigungu', { upr_cd: uprCd })
  const response = await http.get(url)
  try {
    const list: ISigunguItem[] = response.data.response.body.items.item || []
    return list
  } catch (error) {
    return []
  }
}

export const selectKindList = async (params: IKindParams) => {
  const { upKindCd } = params
  const url = getServiceURL('kind', {
    up_kind_cd: upKindCd,
  })
  const response = await http.get(url)
  try {
    const list: ISelectKindItem[] = response.data.response.body.items.item || []
    return list
  } catch (error) {
    return []
  }
}

export const selectPetList = async (
  params: IPetParams,
): Promise<IAnimalListResponse> => {
  const upKind = params.upKind // 축종코드
  const kind = params.kind // 품종코드
  const uprCd = params.uprCd // 시도코드
  const orgCd = params.orgCd // 시군구코드
  const state = params.state // 상태
  const bgnde = params.bgnde // 검색 기간 시작
  const endde = params.endde // 검색 기간 종료
  const page = params.page // 페이지 번호
  const limit = params.limit // 페이지당 보여줄 개수
  const neuterYn = params.neuterYn // 중성화여부

  const reqParams = {
    bgnde,
    endde,
    upkind: upKind,
    kind,
    upr_cd: uprCd,
    org_cd: orgCd,
    state,
    pageNo: page,
    numOfRows: limit,
    neuter_yn: neuterYn,
    _type: 'json',
  }
  // 'https://www.be-born.net/api/abandonmentPublic/',
  const response = await http.get(
    'https://www.be-born.net/api/abandonmentPublic/',
    {
      params: reqParams,
    },
  )
  try {
    const list = response.data.response.body.items.item || []
    const page = response.data.response.body.pageNo || 0
    const total = response.data.response.body.totalCount || 0

    return { list, page, total }
  } catch (error) {
    return { list: [], page: 0, total: 0 }
  }
}
