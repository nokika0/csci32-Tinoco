import { Button } from '@repo/ui/button'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'

export default function buttonPage() {
  return (
    <div className="p-24 flex gap-4 flex-col">
      <div className="flex flex-row gap-4 justify-center">
        <Button size={Size.SMALL} variant={Variant.PRIMARY}>
          Primary
        </Button>
        <Button size={Size.MEDIUM} variant={Variant.PRIMARY}>
          Primary
        </Button>
        {/* never forget the daily wordle */}
        <Button size={Size.LARGE} variant={Variant.PRIMARY} href="https://www.nytimes.com/games/wordle/index.html">
          Primary
        </Button>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <Button size={Size.SMALL} variant={Variant.SECONDARY}>
          Secondary
        </Button>
        <Button size={Size.MEDIUM} variant={Variant.SECONDARY}>
          Secondary
        </Button>
        <Button size={Size.LARGE} variant={Variant.SECONDARY}>
          Secondary
        </Button>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <Button size={Size.SMALL} variant={Variant.TERTIARY}>
          Tertiary
        </Button>
        <Button size={Size.MEDIUM} variant={Variant.TERTIARY}>
          Tertiary
        </Button>
        <Button size={Size.LARGE} variant={Variant.TERTIARY}>
          Tertiary
        </Button>
      </div>
    </div>
  )
}
