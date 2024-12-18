const AnimalItemSkelton = () => {
  return (
    <div role='status' className='animate-pulse justify-center lg:flex'>
      <div className='w-40 rounded-lg lg:w-52'>
        <div className='flex-0 flex h-40 w-40 items-center justify-center rounded-lg bg-gray-300 lg:h-52 lg:w-52'>
          <svg
            className='h-12 w-12 text-gray-200'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            fill='currentColor'
            width={48}
            hanging={48}
            viewBox='0 0 640 512'
          >
            <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
          </svg>
        </div>
        <div className='pt-2'>
          <div className='mx-1 mb-2 h-5 w-36 rounded-full bg-gray-200 lg:w-[180px]'></div>
          <div className='m-1 h-5 w-[140px] rounded-full bg-gray-200'></div>
          <div className='m-1 h-4 w-[120px] rounded-full bg-gray-200'></div>
          <div className='bottom-0 mx-1 mt-2 flex h-5'>
            <div className='w-20 rounded-full bg-gray-200'></div>
            <div className='w-[50px] rounded-full bg-gray-200'></div>
          </div>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default AnimalItemSkelton
