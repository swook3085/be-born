import type { ISidoItem } from './sido'

/** 시군구 조회 파라미터 */
export interface ISigunguParams {
  /** 시도코드 */
  uprCd: string
}

/** 시군구 조회 응답 */
export interface ISigunguItem extends ISidoItem {
  /** 시군구명 */
  orgdownNm: string
  /** 시군구코드 */
  orgCd: string
  /** 시도코드 */
  uprCd: string
}
