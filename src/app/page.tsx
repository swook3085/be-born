import { AnimalList } from '@beborn/components/list'

export const experimental_ppr = true
export const dynamic = 'force-static'

const Home = async () => {
  return (
    <section className='pb-24 lg:px-8'>
      <div className='mx-auto px-3 py-5 lg:h-full lg:p-5'>
        <AnimalList />
      </div>
    </section>
  )
}

export default Home
