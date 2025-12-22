'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-4'>
      <h2 className='mb-4 text-2xl font-bold text-gray-900'>
        동물 정보를 찾을 수 없습니다
      </h2>
      <p className='mb-8 text-center text-gray-600'>
        요청하신 동물의 정보를 찾을 수 없습니다.
        <br />
        공고가 종료되었거나 잘못된 경로일 수 있습니다.
      </p>
      <button
        onClick={() => router.push('/')}
        className='rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90'
      >
        홈으로 돌아가기
      </button>
    </div>
  )
}

