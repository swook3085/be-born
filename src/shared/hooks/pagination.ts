/* eslint-disable react-hooks/exhaustive-deps */
import { IPaginationProps } from '@beborn/shared/interfaces/IPagination'
import { useEffect, useState } from 'react'

import { division } from '../utils'

const usePagination = ({ total, page = 1, onPageChange }: IPaginationProps) => {
  const [_page, setPage] = useState<number>(page)
  const [range, setRange] = useState<number>(0)
  const [rangeList, setRangeList] = useState<number[][]>([])

  useEffect(() => {
    const pageList = Array.from({ length: Math.ceil(total / 20) }).map(
      (_dt, i) => i + 1
    )
    const list = division(pageList, 10)
    setRangeList(list)
    const rangeIdx = list.findIndex(
      (num) => num.findIndex((cNum) => cNum === _page) > -1
    )
    setRange(rangeIdx)
  }, [total])

  useEffect(() => {
    setPage(page)
  }, [page])

  const pageChange = (page: number) => {
    setPage(page)
    onPageChange && onPageChange(page)
  }

  const next = () => {
    const rIdx = (range + 1) * 10 + 1
    pageChange(rIdx)
    const rangeIdx = rangeList.findIndex(
      (num) => num.findIndex((cNum) => cNum === rIdx) > -1
    )
    setRange(rangeIdx)
  }
  const prev = () => {
    const rIdx = (range - 1) * 10 + 1
    pageChange(rIdx)
    const rangeIdx = rangeList.findIndex(
      (num) => num.findIndex((cNum) => cNum === rIdx) > -1
    )
    setRange(rangeIdx)
  }

  return {
    page: _page,
    list: rangeList[range],
    onChange: pageChange,
    next,
    prev,
    isFirst: range === 0,
    isLast: range + 2 === rangeList.length
  }
}

export default usePagination
