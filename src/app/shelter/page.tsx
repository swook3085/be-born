import { FilterWrapper } from '@beborn/components/filter/filter-wrapper'
import { AnimalList } from '@beborn/components/list'

export const dynamic = 'force-static'

const Home = async () => {
  return (
    <section className='pb-24'>
      <div className='mx-auto max-w-[1280px] px-3 lg:h-full lg:p-5'>
        <FilterWrapper />
        <AnimalList />
      </div>
    </section>
  )
}

export default Home
