/** 유기동물 목록 아이템 */
export interface IAnimalListItem {
  // 기본 정보
  /** 유기번호 */
  desertionNo: string
  /** 공고번호 */
  noticeNo: string
  /** 상태 (보호중, 입양완료 등) */
  processState: string
  // 동물 정보
  /** 품종코드 */
  kindCd: string
  /** 품종명 */
  kindNm: string
  /** 전체 품종명 */
  kindFullNm: string
  /** 상위 품종코드 */
  upKindCd: string
  /** 상위 품종명 */
  upKindNm: string
  /** 성별 */
  sexCd: string
  /** 나이 */
  age: string
  /** 체중 */
  weight: string
  /** 색상 */
  colorCd: string
  /** 중성화 여부 */
  neuterYn: string
  /** 특징 */
  specialMark: string
  // 발견 정보
  /** 발견일 */
  happenDt: string
  /** 발견장소 */
  happenPlace: string
  // 공고 정보
  /** 공고시작일 */
  noticeSdt: string
  /** 공고종료일 */
  noticeEdt: string
  // 보호소 정보
  /** 보호소명 */
  careNm: string
  /** 보호소 주소 */
  careAddr: string
  /** 보호소 전화번호 */
  careTel: string
  /** 보호소 소유자명 */
  careOwnerNm: string
  /** 보호소 등록번호 */
  careRegNo: string
  /** 관할기관명 */
  orgNm: string
  // 이미지 정보
  /** 대표 이미지 */
  popfile1: string
  /** 추가 이미지 */
  popfile2: string
  // 기타
  /** 수정일시 */
  updTm: string
}
