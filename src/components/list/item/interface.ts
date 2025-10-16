import type { IAnimalListItem } from '@beborn/shared/interfaces'

export interface IAnimalListItemProps {
  item: IAnimalListItem
  index: number
}

export interface IAnimalImageProps {
  src: string
  alt: string
}
