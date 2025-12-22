export const AnimalDetailSkeleton = () => {
  return (
    <div className='mx-auto max-w-[1280px] px-4 py-6 lg:px-8 lg:py-8'>
      <div className='grid gap-6 lg:grid-cols-2 lg:gap-8'>
        {/* 이미지 영역 스켈레톤 */}
        <div className='space-y-4'>
          <div className='aspect-square animate-pulse rounded-2xl bg-gray-200' />
        </div>

        {/* 정보 영역 스켈레톤 */}
        <div className='space-y-6'>
          {/* 기본 정보 카드 */}
          <div className='space-y-4 rounded-2xl border border-gray-200 bg-white p-6'>
            <div className='flex items-start justify-between'>
              <div className='h-8 w-48 animate-pulse rounded bg-gray-200' />
              <div className='h-6 w-20 animate-pulse rounded-full bg-gray-200' />
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-6 w-6 animate-pulse rounded bg-gray-200' />
              <div className='h-6 w-32 animate-pulse rounded bg-gray-200' />
            </div>
            <div className='grid grid-cols-2 gap-4 border-t border-gray-100 pt-4'>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i}>
                  <div className='mb-2 h-4 w-16 animate-pulse rounded bg-gray-200' />
                  <div className='h-5 w-24 animate-pulse rounded bg-gray-200' />
                </div>
              ))}
            </div>
          </div>

          {/* 발견 정보 카드 */}
          <div className='space-y-4 rounded-2xl border border-gray-200 bg-white p-6'>
            <div className='h-6 w-24 animate-pulse rounded bg-gray-200' />
            <div className='space-y-3'>
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className='flex items-start gap-3'>
                  <div className='mt-0.5 h-5 w-5 animate-pulse rounded bg-gray-200' />
                  <div className='flex-1'>
                    <div className='mb-2 h-4 w-16 animate-pulse rounded bg-gray-200' />
                    <div className='h-5 w-full animate-pulse rounded bg-gray-200' />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 공고 정보 카드 */}
          <div className='space-y-4 rounded-2xl border border-gray-200 bg-white p-6'>
            <div className='h-6 w-24 animate-pulse rounded bg-gray-200' />
            <div className='space-y-2'>
              <div className='h-4 w-16 animate-pulse rounded bg-gray-200' />
              <div className='h-5 w-full animate-pulse rounded bg-gray-200' />
              <div className='h-4 w-32 animate-pulse rounded bg-gray-200' />
            </div>
          </div>

          {/* 보호소 정보 카드 */}
          <div className='space-y-4 rounded-2xl border border-gray-200 bg-white p-6'>
            <div className='h-6 w-24 animate-pulse rounded bg-gray-200' />
            <div className='space-y-3'>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className='flex items-start gap-3'>
                  <div className='mt-0.5 h-5 w-5 animate-pulse rounded bg-gray-200' />
                  <div className='flex-1'>
                    <div className='mb-2 h-4 w-16 animate-pulse rounded bg-gray-200' />
                    <div className='h-5 w-full animate-pulse rounded bg-gray-200' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

