import type { IPetParams } from './list'

/** 유기동물 목록 조회 파라미터 */
export interface ISelectPetList {
  /** 시작일 */
  startDate: IPetParams['bgnde']
  /** 종료일 */
  endDate: IPetParams['endde']
  /** 상위 품종코드 */
  upKind: IPetParams['upKind']
  /** 품종코드 */
  kind: IPetParams['kind']
  /** 시도코드 */
  sido: IPetParams['uprCd']
  /** 시군구코드 */
  sigungu: IPetParams['orgCd']
  /** 페이지 */
  page?: IPetParams['page']
}
