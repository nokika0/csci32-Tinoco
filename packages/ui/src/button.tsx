'use client'

import { ReactNode } from 'react'
import { Size } from './size'
import { Variant } from './variant'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  size?: Size
  variant?: Variant
}

export const Button = ({
  children,
  className,
  href,
  onClick,
  size = Size.MEDIUM,
  variant = Variant.PRIMARY,
}: ButtonProps) => {
  let sizeCssClasses = ''

  switch (size) {
    case Size.SMALL:
      sizeCssClasses = 'px-3 py-1 text-sm'
      break
    case Size.MEDIUM:
      sizeCssClasses = 'px-4 py-2 text-base'
      break
    case Size.LARGE:
      sizeCssClasses = 'px-5 py-3 text-lg'
      break
  }

  let variantCssClasses = ''

  switch (variant) {
    case Variant.PRIMARY:
      variantCssClasses = 'bg-blue-500 text-black hover:bg-blue-600 cursor-pointer active:scale-95'
      break
    case Variant.SECONDARY:
      variantCssClasses = 'bg-gray-500 text-white hover:bg-gray-600 cursor-pointer active:scale-95'
      break
    case Variant.TERTIARY:
      variantCssClasses = 'bg-emerald-500 text-white hover:bg-emerald-700 cursor-pointer active:scale-95'
      break
  }

  const commonCssClasses =
    'focus:outline-2 outline-black rounded-md shadow-md shadow-black transition-colors duration-150'

  const completedCssClasses = `${sizeCssClasses} ${variantCssClasses} ${commonCssClasses} ${className}`

  return href ? (
    <a href={href} className={completedCssClasses}>
      {children}
    </a>
  ) : (
    <button className={completedCssClasses} onClick={onClick}>
      {children}
    </button>
  )
}
