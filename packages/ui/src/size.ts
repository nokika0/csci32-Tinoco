export enum Size {
  SMALL,
  MEDIUM,
  LARGE,
}
export function getSizeStyles(size: Size) {
  switch (size) {
    case Size.SMALL:
      return 'px-3 py-1 text-sm rounded-md shadow-lg  '

    case Size.MEDIUM:
      return 'px-4 py-2 text-base rounded-md shadow-lg '

    case Size.LARGE:
      return 'px-5 py-3 text-lg rounded-md shadow-lg '
  }
}

export function getInputSizeStyles(size: Size) {
  switch (size) {
    case Size.SMALL:
      return 'px-1  text-sm rounded-md shadow-lg border-2 '

    case Size.MEDIUM:
      return 'px-2  text-base rounded-md shadow-lg border-2 '

    case Size.LARGE:
      return 'px-4  text-lg rounded-md shadow-lg border-2  '
  }
}
