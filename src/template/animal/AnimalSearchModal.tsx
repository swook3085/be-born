import SlideOverLayer from '@components/overlays/SlideOverLayer'
import { ReducerType } from '@modules/store/rootReducer'
import { onClose, ISlideModal } from '@modules/store/slices/slideModal'
import { useDispatch, useSelector } from 'react-redux'
import FilterContainer from './FilterContainer'
import useDevice from '@shared/hooks/useDevice'
import Modal from '@components/overlays/Modal'

const AnimalSearchModal = () => {
  const { isPc } = useDevice()
  const sliceModal = useSelector<ReducerType, ISlideModal>(
    (state) => state.sliceModal,
  )
  const dispatch = useDispatch()

  if (isPc) {
    return (
      <Modal show={sliceModal.open} onClose={() => dispatch(onClose())}>
        <FilterContainer />
      </Modal>
    )
  }

  return (
    <SlideOverLayer show={sliceModal.open} onClose={() => dispatch(onClose())}>
      <FilterContainer />
    </SlideOverLayer>
  )
}

export default AnimalSearchModal
