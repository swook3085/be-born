import { AnimalDetailContent } from '@beborn/components/animal-detail'
import { selectPetDetail } from '@beborn/controller'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import Loading from './loading'

export const revalidate = 3600 // 1시간마다 재생성
export const dynamic = 'force-static'

interface IDetailPageProps {
  params: Promise<{
    desertionNo: string
  }>
}

async function AnimalDetail({ desertionNo }: { desertionNo: string }) {
  const animal = await selectPetDetail(desertionNo)

  if (!animal) {
    notFound()
  }

  return <AnimalDetailContent animal={animal} />
}

export default async function DetailPage({ params }: IDetailPageProps) {
  const { desertionNo } = await params

  return (
    <Suspense fallback={<Loading />}>
      <AnimalDetail desertionNo={desertionNo} />
    </Suspense>
  )
}
