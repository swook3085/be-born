/** 시도 조회 파라미터 */
export interface ISidoParams {
  /** 페이지 크기 */
  numOfRows: string
}

/** 시도 조회 응답 */
export interface ISidoItem {
  /** 시도명 */
  orgdownNm: string
  /** 시도코드 */
  orgCd: string
}
