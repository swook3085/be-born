'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@beborn/components/carousel'
import { useState } from 'react'

interface IImageCarouselProps {
  images: string[]
  alt: string
}

export const ImageCarousel = ({ images, alt }: IImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className='aspect-square rounded-2xl bg-gray-200 flex items-center justify-center'>
        <span className='text-gray-400'>이미지가 없습니다</span>
      </div>
    )
  }

  if (images.length === 1) {
    return (
      <div className='relative aspect-square overflow-hidden rounded-2xl bg-gray-100'>
        <img
          src={images[0]}
          alt={alt}
          className='h-full w-full object-cover'
        />
      </div>
    )
  }

  return (
    <div className='relative'>
      <Carousel
        opts={{ loop: true }}
        className='w-full'
        setApi={(api) => {
          if (!api) return
          api.on('select', () => {
            setCurrentIndex(api.selectedScrollSnap())
          })
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className='relative aspect-square overflow-hidden rounded-2xl bg-gray-100'>
                <img
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  className='h-full w-full object-cover'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-4 h-10 w-10 bg-white/90 hover:bg-white' />
        <CarouselNext className='right-4 h-10 w-10 bg-white/90 hover:bg-white' />
      </Carousel>

      {/* 인디케이터 */}
      <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-6 bg-white'
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

