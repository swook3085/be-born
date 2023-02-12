export interface IPaginationProps {
  total: number
  page: number
  onPageChange?: (page: number) => void
}
