import useDevice from '@shared/hooks/useDevice'
import { IAnimalListItem } from '@shared/interface/IPet'
import { LegacyRef, Ref, forwardRef } from 'react'
import MobileAnimalItem from './MobileAnimalItem'
import PcAnimalItem from './PcAnimalItem'
import { useSelector } from 'react-redux'
import { ReducerType } from '@modules/store/rootReducer'
import { IDetailParam } from '@modules/store/slices/detailParam'

const AnimalItem = forwardRef(
  (item: IAnimalListItem, ref: Ref<HTMLDivElement>) => {
    const { isPc } = useDevice()
    const detail = useSelector<ReducerType, IDetailParam>(
      (state) => state.sliceDetailParam,
    )
    return !isPc ? (
      <MobileAnimalItem ref={ref} item={item} detail={detail} />
    ) : (
      <PcAnimalItem item={item} detail={detail} />
    )
  },
)

export default AnimalItem
