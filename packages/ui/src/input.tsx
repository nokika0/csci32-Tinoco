import { getInputSizeStyles, Size } from './size'
import { getCommonStyles } from './tokens'
import { getVariantBorderStyles, getVariantInputTextStyles, getVariantOutlineStyles, Variant } from './variant' // added to give input the background styles
import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  variant?: Variant
  size?: Size
  placeholder?: string
  type?: string
  value?: any
  setValue?: (newValue: any) => void
  defaultValue?: any
  name: string
  id: string
}

export default function Input({
  variant = Variant.PRIMARY,
  size = Size.MEDIUM,
  value,
  name,
  id,
  defaultValue,
  setValue,
  type = 'text',
  placeholder,
}: InputProps) {
  const sizeCssClasses = getInputSizeStyles(size)
  const variantBorderCssClasses = getVariantBorderStyles(variant)
  const variantInputTextCssClasses = getVariantInputTextStyles(variant)
  const variantOutlineCssClasses = getVariantOutlineStyles(variant)
  const commonCssClasses = getCommonStyles()
  return (
    <input
      className={` ${sizeCssClasses} ${variantBorderCssClasses} ${variantInputTextCssClasses} ${variantOutlineCssClasses} ${commonCssClasses}`}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      type={type}
      id={id}
      value={value}
      onChange={setValue ? (newValue) => setValue(newValue.currentTarget.value) : () => {}}
    />
  )
}
