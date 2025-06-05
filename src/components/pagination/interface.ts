import type { MouseEvent } from 'react'

/** 페이지 화살표 컴포넌트 인터페이스 */
export interface IPaginationArrowProps {
  /** 비활성화 여부 */
  disabled?: boolean
  /** 화살표 방향 */
  arrow: 'prev' | 'next'
  /** 클릭 이벤트 */
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void
}

/** 페이지 아이템 컴포넌트 인터페이스 */
export interface IPagiItemProps {
  /** 페이지 번호 */
  page: number
  /** 현재 페이지 여부 */
  active?: boolean
}

/** 페이지 컴포넌트 인터페이스 */
export interface IPaginationProps {
  /** 총 페이지 수 */
  total: number
}
