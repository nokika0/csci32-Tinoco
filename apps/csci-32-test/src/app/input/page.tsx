'use client'
import { Button } from '@repo/ui/button'
import Input from '@repo/ui/input'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'
import { useState } from 'react'

export default function InputPage() {
  const [name, setName] = useState('')
  const [movie, setMovie] = useState('')
  const [character, setCharacter] = useState('')

  return (
    <div className="p-24">
      <div className="flex gap-4 justify-center flex-row flex-wrap">
        <div className="flex gap-2">
          <Input value={name} setValue={setName} variant={Variant.PRIMARY} size={Size.SMALL} name="name" id="name" />
          <Button variant={Variant.PRIMARY} onClick={() => alert(`Hello there: ${name}`)}>
            NAME
          </Button>
        </div>
        <div className="flex gap-2">
          <Input
            value={movie}
            setValue={setMovie}
            variant={Variant.SECONDARY}
            size={Size.MEDIUM}
            name="movie"
            id="movie"
          />
          <Button variant={Variant.SECONDARY} onClick={() => alert(`${movie}, Sounds like a really good movie`)}>
            MOVIE
          </Button>
        </div>
        <div className="flex gap-2">
          <Input
            value={character}
            setValue={setCharacter}
            variant={Variant.TERTIARY}
            size={Size.LARGE}
            placeholder="Your favorite character"
            name="character"
            id="character"
          />
          <Button variant={Variant.TERTIARY} onClick={() => alert(`So your character is ${character}?`)}>
            CHARACTER
          </Button>
        </div>
      </div>
    </div>
  )
}
