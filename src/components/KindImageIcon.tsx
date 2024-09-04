import { isCat } from '@beborn/shared'
import Image from 'next/image'
import { useRef } from 'react'

const KindImageIcon = ({ kindCd }: { kindCd: string }) => {
  const imgSrc = useRef<string>('/images/happydog.png')
  const imgArt = useRef<string>('개')
  if (isCat(kindCd)) {
    imgSrc.current = '/images/happycat.png'
    imgArt.current = '고양이'
  }
  return (
    <Image
      layout='intrinsic'
      width={15}
      height={15}
      quality={100}
      objectFit='cover'
      src={imgSrc.current}
      alt={imgArt.current}
    />
  )
}

export default KindImageIcon
