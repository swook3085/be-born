import {
  IAnimalListItem,
  IAnimalListResponse,
  IKindParams,
  IPetParams,
  IPetResponse,
  ISelectKindItem,
  ISidoItem,
  ISidoParams,
  ISigunguItem,
  ISigunguParams
} from '@beborn/shared/interfaces/IPet'
import { baseFetch, getServiceURL } from '@beborn/shared/utils'

export const selectSidoList = async (params: ISidoParams) => {
  const url = getServiceURL('sido', params)
  const response = await baseFetch<IPetResponse<ISidoItem[]>>(url)
  try {
    const list = response?.items || []
    return list
  } catch (error) {
    return []
  }
}

export const selectSigunguList = async (params: ISigunguParams) => {
  const { uprCd } = params
  const url = getServiceURL('sigungu', { upr_cd: uprCd })
  const response = await baseFetch<IPetResponse<ISigunguItem[]>>(url)

  try {
    const list = response.items.item || []
    return list
  } catch (error) {
    return []
  }
}

export const selectKindList = async (params: IKindParams) => {
  const { upKindCd } = params
  const url = getServiceURL('kind', {
    up_kind_cd: upKindCd
  })
  const response = await baseFetch<IPetResponse<ISelectKindItem[]>>(url)

  try {
    const list = response.items.item || []
    return list
  } catch (error) {
    return []
  }
}

export const selectPetList = async (
  params: IPetParams
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
    // upkind: upKind,
    // kind,
    // upr_cd: uprCd,
    // org_cd: orgCd,
    state,
    pageNo: page,
    numOfRows: limit,
    // neuter_yn: neuterYn,
    _type: 'json'
  }
  const url = getServiceURL('abandonmentPublic', reqParams)
  // 'https://www.be-born.net/api/abandonmentPublic/',
  // const response = await http.get(
  //   'https://www.be-born.net/api/abandonmentPublic/',
  //   {
  //     params: reqParams
  //   }
  // )

  const response = await baseFetch<IPetResponse<IAnimalListItem[]>>(url)

  try {
    const list = response.items.item || []
    const page = response.pageNo || 0
    const total = response.totalCount || 0

    console.log('list', response)
    return { list, page, total }
  } catch (error) {
    return { list: [], page: 0, total: 0 }
  }
}
