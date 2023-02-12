import Layout from '@components/layout/Layout'
import type { NextPageWithLayout } from '@pages/_app'
import { ReactElement } from 'react'
import Navbar from '@components/layout/NavBar'
import FilterButton from '@components/layout/FilterButton'
import AnimalList from '@template/animal/AnimalList'
import AnimalSearchModal from '@template/animal/AnimalSearchModal'
import Head from 'next/head'

const AnimalMain: NextPageWithLayout = () => {
  return (
    <>
      <section className='pt-2 pb-24 px-3 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-10'>
          <div className='lg:h-full'>
            <AnimalList />
          </div>
        </div>
      </section>
      <AnimalSearchModal />
    </>
  )
}

AnimalMain.layout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Beborn</title>
        <meta
          name='description'
          content='유기된 동물들을 소개합니다. 사지말고 입양하자'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar>
        <FilterButton />
      </Navbar>
      <Layout>{page}</Layout>
    </>
  )
}

export default AnimalMain
