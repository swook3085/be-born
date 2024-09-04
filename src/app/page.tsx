import AnimalList from '@beborn/components/AnimalList'

export const experimental_ppr = true
export const dynamic = 'force-static'

const Home = async () => {
  return (
    <section className='px-3 pb-24 pt-2 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-10'>
        <div className='lg:h-full'>
          <AnimalList />
        </div>
      </div>
    </section>
  )
}

export default Home
