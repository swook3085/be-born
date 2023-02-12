import { IAnimalListItem } from './IPet'

export interface IAnimalDetailChildProps {
  item: IAnimalListItem | null
  isFetching: boolean
}
