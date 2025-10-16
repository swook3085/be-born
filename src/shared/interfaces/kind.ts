/** 품종 조회 파라미터 */
export interface IKindParams {
  /** 상위 품종코드 */
  upKindCd: string
}

/** 품종 조회 응답 */
export interface ISelectKindItem {
  /** 품종명 */
  knm: string
  /** 품종코드 */
  kindCd: string
}
