import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

export interface IPopoverContentProps extends React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
> {
  ref?: React.Ref<React.ElementRef<typeof PopoverPrimitive.Content>>
}
