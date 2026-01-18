import { AnimalDetailContent } from '@beborn/components/animal-detail'
import { selectPetDetail } from '@beborn/controller'
import { notFound } from 'next/navigation'

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

  return <AnimalDetail desertionNo={desertionNo} />
}
