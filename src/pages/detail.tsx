import Layout from '@components/layout/Layout'
import { ReactElement, useRef } from 'react'
import { QueryClient, dehydrate, useQuery } from 'react-query'
import { AnimallKey } from '@shared/queryKey'
import { selectPetList } from '@controller/petController'
import { useRouter } from 'next/router'
import { IDetailParam } from '@modules/store/slices/detailParam'
import { useMemo } from 'react'
import Head from 'next/head'
import TopInfo from '@template/detail/TopInfo'
import DtImage from '@template/detail/DtImage'
import AnimalInfo from '@template/detail/AnimalInfo'
import CareInfo from '@template/detail/CareInfo'
import CareMap from '@template/detail/CareMap'
import BackHeader from '@components/layout/BackHeader'
import { GetServerSidePropsContext } from 'next'
import { replaceHTTP } from '@shared/utils'

interface IAnimalDetailProps extends IDetailParam {
  id: string
}

const AnimalDetail = () => {
  const infoRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { bgnde, state, id, neuterYn, upKind } = router.query

  const params: IAnimalDetailProps = {
    upKind: upKind as string,
    // kind: kind as string,
    // uprCd: uprCd as string,
    // orgCd: orgCd as string,
    bgnde: bgnde as string,
    endde: bgnde as string,
    page: 1,
    limit: '1000',
    state: state as string,
    id: id as string,
    neuterYn: neuterYn as string,
  }
  const getData = async () => selectPetList(params)
  const { data, isFetching } = useQuery(
    [AnimallKey.ANIMAL_DETAIL_LIST, params.id],
    getData,
    {
      enabled: params.id != null,
    },
  )

  const item =
    useMemo(() => {
      const list = data?.list || []
      if (list.length === 0) return null
      return list.find(({ desertionNo }) => desertionNo === params.id)
    }, [data]) || null

  return (
    <>
      <Head>
        <title>Beborn</title>
        <meta property='og:title' content={item?.noticeNo} />
        <meta property='og:url' content={`www.be-born.net${router.asPath}`} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={replaceHTTP(item?.popfile || '')} />
        <meta property='og:site_name' content='beBorn' />
        <meta property='og:description' content={item?.happenPlace} />
      </Head>
      <BackHeader title={item?.noticeNo || ''} viewRef={infoRef} />
      <Layout>
        <div className='lg:w-[729px] lg:mt-2 mx-auto'>
          <DtImage item={item} isFetching={isFetching} />
          {/* 전화/공유 영역 */}
          <TopInfo item={item} isFetching={isFetching} ref={infoRef} />
          {/* 동물 정보 영역 */}
          <AnimalInfo item={item} isFetching={isFetching} />
          <div>
            <h2 className='mb-2.5 text-lg mx-5'>보호소</h2>
            {/* 보호소 지도 영역 */}
            <CareMap item={item} isFetching={isFetching} />
            {/* 보호소 정보 영역 */}
            <div className='mx-5 my-2'>
              <CareInfo item={item} isFetching={isFetching} />
              {/* <hr className='my-4' />
              <h2 className='mb-2.5 text-md'>
                {item?.careNm}에서 보호하고 있어요
              </h2>
              <div className='overflow-auto'>
                <div className='flex flex-nowrap gap-4'>
                  <div className='w-[130px] h-[130px] flex-none rounded-md bg-[#676c76]'></div>
                  <div className='w-[130px] h-[130px] flex-none rounded-md bg-[#676c76]'></div>
                  <div className='w-[130px] h-[130px] flex-none rounded-md bg-[#676c76]'></div>
                  <div className='w-[130px] h-[130px] flex-none rounded-md bg-[#676c76]'></div>
                  <div className='w-[130px] h-[130px] flex-none rounded-md bg-[#676c76]'></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

AnimalDetail.layout = (page: ReactElement) => {
  return <>{page}</>
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { bgnde, state, id, neuterYn, upKind } = ctx.query
  const queryClient = new QueryClient()
  const params: IAnimalDetailProps = {
    upKind: upKind as string,
    // kind: kind as string,
    // uprCd: uprCd as string,
    // orgCd: orgCd as string,
    bgnde: bgnde as string,
    endde: bgnde as string,
    page: 1,
    limit: '1000',
    state: state as string,
    id: id as string,
    neuterYn: neuterYn as string,
  }

  const getData = async () => selectPetList(params)
  await queryClient.prefetchQuery(
    [AnimallKey.ANIMAL_DETAIL_LIST, params.id],
    getData,
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default AnimalDetail
