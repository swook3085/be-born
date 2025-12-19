import { isCat } from '@beborn/shared'
import Image from 'next/image'
import { useRef } from 'react'

import type { IKindImageIconProps } from './interface'

export const KindImageIcon = ({ upKindCd }: IKindImageIconProps) => {
  const imgSrc = useRef<string>('/images/happydog.png')
  const imgArt = useRef<string>('개')
  
  if (isCat(upKindCd)) {
    imgSrc.current = '/images/happycat.png'
    imgArt.current = '고양이'
  }
  
  return (
    <Image
      width={15}
      height={15}
      quality={100}
      className='object-cover'
      src={imgSrc.current}
      alt={imgArt.current}
    />
  )
}

