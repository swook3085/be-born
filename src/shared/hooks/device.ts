import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

//* 반응형 디바이스 체크 hook
const useDevice = (): {
  isPc: boolean
  isMobile: boolean
  isTablet: boolean
} => {
  const [isPc, setIsPc] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isTablet, setIsTablet] = useState<boolean>(false)

  const pc = useMediaQuery({
    query: '(min-width:1024px)',
  })
  const mobile = useMediaQuery({
    query: '(max-width:767px)',
  })
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  useEffect(() => {
    setIsPc(pc)
    setIsMobile(mobile)
    setIsTablet(tablet)
  }, [pc, mobile, tablet])

  return {
    isPc,
    isMobile,
    isTablet,
  }
}

export default useDevice
