import type { IAnimalListItem } from './item'

/** 유기동물 목록 조회 파라미터 */
export interface IPetParams {
  /** 시작일 */
  bgnde?: string
  /** 종료일 */
  endde?: string
  /** 상위 품종코드 */
  upKind?: string
  /** 품종코드 */
  kind?: string
  /** 시도코드 */
  uprCd?: string
  /** 시군구코드 */
  orgCd?: string
  /** 상태 */
  state: string
  /** 페이지 */
  page: number
  /** 페이지 크기 */
  limit: string
  /** 중성화 여부 */
  neuterYn?: string
}

/** 유기동물 목록 조회 응답 */
export interface IAnimalListResponse {
  list: IAnimalListItem[]
  total: number
  page: number
}

// export interface IKindContainerProps {
//   kind: string
//   upKind: string
//   onChange: (
//     value: string,
//     state: 'kind' | 'upKind' | 'sido' | 'sigungu'
//   ) => void
// }

// export interface ISidoContainerProps {
//   sido: string
//   sigungu: string
//   onChange: (
//     value: string,
//     state: 'kind' | 'upKind' | 'sido' | 'sigungu'
//   ) => void
// }

// export interface IAnimalFilterProps {
//   kindProps: IKindContainerProps
//   sidoProps: ISidoContainerProps
// }

export interface ISelectPetList {
  startDate: IPetParams['bgnde']
  endDate: IPetParams['endde']
  upKind: IPetParams['upKind']
  kind: IPetParams['kind']
  sido: IPetParams['uprCd']
  sigungu: IPetParams['orgCd']
  page?: IPetParams['page']
}
