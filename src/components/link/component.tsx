import NextLink from 'next/link'

import type { ILinkProps } from './interface'

export const Link = ({
  prefetch = false,
  scroll = false,
  ...props
}: ILinkProps) => {
  return <NextLink prefetch={prefetch} scroll={scroll} {...props} />
}
