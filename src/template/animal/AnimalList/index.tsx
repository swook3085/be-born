import useDevice from '@shared/hooks/useDevice'
import PcAnimalList from './PcAnimalList'
import MobileAnimalList from './MobileAnimalList'

const AnimalList = () => {
  const { isPc } = useDevice()
  return !isPc ? <MobileAnimalList /> : <PcAnimalList />
}

export default AnimalList
