'use client'

import { ReactNode } from 'react'
import { getInputSizeStyles, getSizeStyles, Size } from './size'
import {
  getVariantBackgroundStyles,
  getVariantOutlineStyles,
  getVariantInputTextStyles,
  getVariantBorderStyles,
  Variant,
} from './variant'
import { getCommonStyles } from './tokens'

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
  const sizeCssClasses = getSizeStyles(size)

  const variantBackgroundCssClasses = getVariantBackgroundStyles(variant)
  const variantOutlineCssClasses = getVariantOutlineStyles(variant)
  const variantTextCssClasses = getVariantInputTextStyles(variant)
  const variantBorderCssClasses = getVariantBorderStyles(variant)

  const commonCssClasses = getCommonStyles()

  const completedCssClasses = `${sizeCssClasses}  ${variantBackgroundCssClasses} ${variantOutlineCssClasses} ${variantTextCssClasses} ${variantBorderCssClasses} ${commonCssClasses} ${className}`

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
