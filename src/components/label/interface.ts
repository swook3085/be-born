import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

export interface ILabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  ref?: React.Ref<React.ElementRef<typeof LabelPrimitive.Root>>
}

