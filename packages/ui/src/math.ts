export function getRandomInt({ min, max }: { min: number; max: number }) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
// TODO: get this package into it's own package outside of UI
