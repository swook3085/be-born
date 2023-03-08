import useDevice from '@shared/hooks/useDevice'
import { IAnimalListItem } from '@shared/interface/IPet'
import { Ref, forwardRef } from 'react'
import MobileAnimalItem from './MobileAnimalItem'
import PcAnimalItem from './PcAnimalItem'

const AnimalItem = forwardRef(
  (item: IAnimalListItem, ref: Ref<HTMLDivElement>) => {
    const { isPc } = useDevice()
    return !isPc ? (
      <MobileAnimalItem ref={ref} item={item} />
    ) : (
      <PcAnimalItem item={item} />
    )
  },
)

export default AnimalItem
