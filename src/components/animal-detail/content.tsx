'use client'

import { KindImageIcon } from '@beborn/components/kind-image'
import { StatusBadge } from '@beborn/components/status-badge'
import { endDateBadgeType, noticeDateDiff } from '@beborn/shared'
import type { IAnimalListItem } from '@beborn/shared/interfaces'
import { Calendar, MapPin, Phone, User } from 'lucide-react'

import { ImageCarousel } from './image-carousel'

interface IAnimalDetailContentProps {
  animal: IAnimalListItem
}

export const AnimalDetailContent = ({ animal }: IAnimalDetailContentProps) => {
  const { noticeSdt, noticeEdt } = animal

  // 이미지 배열 생성 (빈 문자열이 아닌 이미지만 포함)
  const images = [animal.popfile1, animal.popfile2].filter((img) => img)

  return (
    <div className='mx-auto max-w-[1280px] px-4 py-6 lg:px-8 lg:py-8'>
      <div className='grid gap-6 lg:grid-cols-2 lg:gap-8'>
        {/* 이미지 영역 */}
        <div>
          <ImageCarousel images={images} alt={animal.noticeNo} />
        </div>

        {/* 정보 영역 */}
        <div className='space-y-6'>
          {/* 기본 정보 */}
          <div className='space-y-4 rounded-2xl border border-gray-200 bg-white p-6'>
            <div className='flex items-start justify-between'>
              <h1 className='cursor-default text-2xl font-bold text-gray-900 lg:text-3xl'>
                {animal.noticeNo}
              </h1>
              <StatusBadge type={endDateBadgeType(noticeSdt, noticeEdt)}>
                {animal.processState}
              </StatusBadge>
            </div>

            <div className='flex items-center gap-2 text-gray-700'>
              <KindImageIcon upKindCd={animal.upKindCd} />
              <span className='cursor-default text-lg font-medium'>
                {animal.kindNm}
              </span>
            </div>

            <div className='grid grid-cols-2 gap-4 border-t border-gray-100 pt-4'>
              <div>
                <p className='cursor-default text-sm text-gray-500'>나이</p>
                <p className='mt-1 cursor-default font-medium text-gray-900'>
                  {animal.age}
                </p>
              </div>
              <div>
                <p className='cursor-default text-sm text-gray-500'>체중</p>
                <p className='mt-1 cursor-default font-medium text-gray-900'>
                  {animal.weight}
                </p>
              </div>
              <div>
                <p className='cursor-default text-sm text-gray-500'>성별</p>
                <p className='mt-1 cursor-default font-medium text-gray-900'>
                  {animal.sexCd === 'M'
                    ? '수컷'
                    : animal.sexCd === 'F'
                      ? '암컷'
                      : '미상'}
                </p>
              </div>
              <div>
                <p className='cursor-default text-sm text-gray-500'>중성화</p>
                <p className='mt-1 cursor-default font-medium text-gray-900'>
                  {animal.neuterYn === 'Y'
                    ? '완료'
                    : animal.neuterYn === 'N'
                      ? '미완료'
                      : '미상'}
                </p>
              </div>
              <div className='col-span-2'>
                <p className='cursor-default text-sm text-gray-500'>색상</p>
                <p className='mt-1 cursor-default font-medium text-gray-900'>
                  {animal.colorCd}
                </p>
              </div>
            </div>

            {animal.specialMark && (
              <div className='border-t border-gray-100 pt-4'>
                <p className='cursor-default text-sm text-gray-500'>특징</p>
                <p className='mt-2 cursor-default whitespace-pre-wrap text-gray-900'>
                  {animal.specialMark}
                </p>
              </div>
            )}
          </div>

          {/* 발견 정보 */}
          <div className='space-y-4 rounded-2xl border border-gray-200 bg-white p-6'>
            <h2 className='cursor-default text-xl font-bold text-gray-900'>
              발견 정보
            </h2>
            <div className='space-y-3'>
              <div className='flex items-start gap-3'>
                <Calendar className='mt-0.5 h-5 w-5 shrink-0 text-gray-400' />
                <div>
                  <p className='cursor-default text-sm text-gray-500'>발견일</p>
                  <p className='mt-1 cursor-default font-medium text-gray-900'>
                    {animal.happenDt.replace(
                      /(\d{4})(\d{2})(\d{2})/,
                      '$1년 $2월 $3일'
                    )}
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <MapPin className='mt-0.5 h-5 w-5 shrink-0 text-gray-400' />
                <div>
                  <p className='cursor-default text-sm text-gray-500'>
                    발견장소
                  </p>
                  <p className='mt-1 cursor-default font-medium text-gray-900'>
                    {animal.happenPlace}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 공고 정보 */}
          <div className='space-y-4 rounded-2xl border border-gray-200 bg-white p-6'>
            <h2 className='cursor-default text-xl font-bold text-gray-900'>
              공고 정보
            </h2>
            <div className='space-y-3'>
              <div>
                <p className='cursor-default text-sm text-gray-500'>
                  공고 기간
                </p>
                <p className='mt-1 cursor-default font-medium text-gray-900'>
                  {noticeSdt.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')} ~{' '}
                  {noticeEdt.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')}
                </p>
                <p className='mt-1 cursor-default text-sm text-gray-500'>
                  종료 {noticeDateDiff(noticeSdt, noticeEdt)}일 전
                </p>
              </div>
            </div>
          </div>

          {/* 보호소 정보 */}
          <div className='space-y-4 rounded-2xl border border-gray-200 bg-white p-6'>
            <h2 className='cursor-default text-xl font-bold text-gray-900'>
              보호소 정보
            </h2>
            <div className='space-y-3'>
              <div className='flex items-start gap-3'>
                <User className='mt-0.5 h-5 w-5 shrink-0 text-gray-400' />
                <div>
                  <p className='cursor-default text-sm text-gray-500'>
                    보호소명
                  </p>
                  <p className='mt-1 cursor-default font-medium text-gray-900'>
                    {animal.careNm}
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <MapPin className='mt-0.5 h-5 w-5 shrink-0 text-gray-400' />
                <div>
                  <p className='cursor-default text-sm text-gray-500'>주소</p>
                  <p className='mt-1 cursor-default font-medium text-gray-900'>
                    {animal.careAddr}
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Phone className='mt-0.5 h-5 w-5 shrink-0 text-gray-400' />
                <div>
                  <p className='cursor-default text-sm text-gray-500'>
                    전화번호
                  </p>
                  <p className='mt-1 font-medium text-gray-900'>
                    <a
                      href={`tel:${animal.careTel}`}
                      className='text-primary hover:underline'
                    >
                      {animal.careTel}
                    </a>
                  </p>
                </div>
              </div>
              {animal.orgNm && (
                <div>
                  <p className='cursor-default text-sm text-gray-500'>
                    관할기관
                  </p>
                  <p className='mt-1 cursor-default font-medium text-gray-900'>
                    {animal.orgNm}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
