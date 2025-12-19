import * as SheetPrimitive from '@radix-ui/react-dialog'
import type { VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import type { sheetVariants } from './variants'

export interface ISheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  ref?: React.Ref<React.ElementRef<typeof SheetPrimitive.Content>>
}

export interface ISheetOverlayProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> {
  ref?: React.Ref<React.ElementRef<typeof SheetPrimitive.Overlay>>
}

export interface ISheetTitleProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> {
  ref?: React.Ref<React.ElementRef<typeof SheetPrimitive.Title>>
}

export interface ISheetDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> {
  ref?: React.Ref<React.ElementRef<typeof SheetPrimitive.Description>>
}



