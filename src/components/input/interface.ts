import * as React from 'react'

export interface IInputProps extends React.ComponentProps<'input'> {
  ref?: React.Ref<HTMLInputElement>
}

