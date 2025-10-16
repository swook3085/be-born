import { ErrorImage } from '@beborn/components/error/image'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import type { IAnimalImageProps } from './interface'

export const AnimalImage = ({ src, alt }: IAnimalImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  if (isError) {
    return <ErrorImage className='h-12 w-12 text-gray-200' />
  }

  return (
    <div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-300'>
      <Image
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className={clsx(
          '!relative object-cover transition-all duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
      />
    </div>
  )
}
