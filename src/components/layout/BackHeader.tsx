import useDevice from '@shared/hooks/useDevice'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { RefObject, useEffect } from 'react'
import Navbar from './NavBar'

const BackHeader = ({
  title,
  viewRef,
}: {
  title: string
  viewRef: RefObject<HTMLDivElement>
}) => {
  const { isMobile, isPc, isTablet } = useDevice()
  const headerRef = useRef<HTMLDivElement>(null)
  const [isTransparent, setTransparent] = useState(true)
  const { back } = useRouter()
  const BackIcon = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className={`w-10 h-10 ${isTransparent ? 'text-white' : 'text-black'}`}
      >
        <path
          fillRule='evenodd'
          d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
          clipRule='evenodd'
        />
      </svg>
    )
  }

  useEffect(() => {
    const scrollEvent = () => {
      const scrollY = viewRef.current?.getBoundingClientRect().y || 0
      setTransparent(scrollY > 0)
    }
    window.addEventListener('scroll', scrollEvent)
    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  if (isMobile) {
    return (
      <div
        ref={headerRef}
        className={`fixed z-50 h-[65px] w-full ${
          isTransparent ? 'bg-[rgba(255,255,255,0)]' : 'bg-[#fff]'
        }`}
      >
        <div className='top-[12px] left-2 absolute'>
          <button onClick={() => back()}>
            <BackIcon />
          </button>
        </div>
        {isTransparent ? null : (
          <div className='flex w-full h-full items-center justify-center'>
            <p className='text-lg'>{title}</p>
          </div>
        )}
      </div>
    )
  }
  return <Navbar show={isMobile || isTablet || isPc} />
}

export default BackHeader
