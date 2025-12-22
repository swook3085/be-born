import type { LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

export interface ILinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  children?: ReactNode
  prefetch?: boolean
  scroll?: boolean
}

