import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

export interface ISelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  ref?: React.Ref<React.ElementRef<typeof SelectPrimitive.Trigger>>
}

export interface ISelectScrollUpButtonProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> {
  ref?: React.Ref<React.ElementRef<typeof SelectPrimitive.ScrollUpButton>>
}

export interface ISelectScrollDownButtonProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> {
  ref?: React.Ref<React.ElementRef<typeof SelectPrimitive.ScrollDownButton>>
}

export interface ISelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  ref?: React.Ref<React.ElementRef<typeof SelectPrimitive.Content>>
}

export interface ISelectLabelProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {
  ref?: React.Ref<React.ElementRef<typeof SelectPrimitive.Label>>
}

export interface ISelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  ref?: React.Ref<React.ElementRef<typeof SelectPrimitive.Item>>
}

export interface ISelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {
  ref?: React.Ref<React.ElementRef<typeof SelectPrimitive.Separator>>
}

