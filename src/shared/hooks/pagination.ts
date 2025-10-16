import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { division } from '../utils'

const usePagination = (total: number) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [_page, setPage] = useState<number>(1)
  const [range, setRange] = useState<number>(0)
  const [rangeList, setRangeList] = useState<number[][]>([])

  const onClickNext = () => {
    const rIdx = (range + 1) * 10 + 1
    const rangeIdx = rangeList.findIndex(
      (num) => num.findIndex((cNum) => cNum === rIdx) > -1
    )
    setRange(rangeIdx)
    onPageChange(rIdx)
  }
  const onClickPrev = () => {
    const rIdx = (range - 1) * 10 + 1
    const rangeIdx = rangeList.findIndex(
      (num) => num.findIndex((cNum) => cNum === rIdx) > -1
    )
    setRange(rangeIdx)
    onPageChange(rIdx)
  }

  const onPageChange = (page: number) => {
    router.prefetch(`?page=${page}`)
    router.push(`?page=${page}`)
  }

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
    setPage(Number(searchParams.get('page') || 1))
  }, [searchParams])

  return {
    page: _page,
    list: rangeList[range],
    isFirst: range === 0,
    isLast: range + 2 === rangeList.length,
    onClickNext,
    onClickPrev
  }
}

export default usePagination
