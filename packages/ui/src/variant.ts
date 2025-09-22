export enum Variant {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}

export function getVariantBackgroundStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'bg-blue-500  hover:bg-blue-600 cursor-pointer active:scale-95'
    case Variant.SECONDARY:
      return 'bg-gray-500  hover:bg-gray-600 cursor-pointer active:scale-95'
    case Variant.TERTIARY:
      return 'bg-emerald-500 hover:bg-emerald-700 cursor-pointer active:scale-95'
  }
}

// For now all outlines will be black until the colors of the site are finalized
// note: I kinda like a white outline for the the grey button,   unsure
export function getVariantOutlineStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'focus:outline-2 outline-black'
    case Variant.SECONDARY:
      return 'focus:outline-2 outline-black'
    case Variant.TERTIARY:
      return 'focus:outline-2 outline-black'
  }
}

export function getVariantBorderStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'border border-black'
    case Variant.SECONDARY:
      return 'border border-black'
    case Variant.TERTIARY:
      return 'border border-black'
  }
}

export function getVariantInputTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-black'
    case Variant.SECONDARY:
      return 'text-black'
    case Variant.TERTIARY:
      return 'text-black'
  }
}

export function getVariantTextStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'text-black'
    case Variant.SECONDARY:
      return 'text-white'
    case Variant.TERTIARY:
      return 'text-white'
  }
}
