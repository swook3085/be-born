/** 유기동물 공통 조회 응답 */
export interface IPetResponse<T> {
  items: {
    item: T
  }
  pageNo?: number
  totalCount?: number
}
