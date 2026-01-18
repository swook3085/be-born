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
    <div className='relative aspect-square w-full overflow-hidden bg-gray-100 rounded-xl'>
      <Image
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className={clsx(
          'relative! object-cover transition-transform duration-300 group-hover:scale-105',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
      />
      {!isLoaded && (
        <div className='absolute inset-0 animate-pulse bg-gray-200' />
      )}
    </div>
  )
}
