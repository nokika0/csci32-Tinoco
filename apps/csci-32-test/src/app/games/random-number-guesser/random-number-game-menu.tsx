'use client'
import { Button } from '@repo/ui/button'

import { guessGameProps } from './page'
import { useState } from 'react'
import Input from '@repo/ui/input'

export default function RandomNumberGameMenu({ startGame }: guessGameProps) {
  const [showSettings, setShowSettings] = useState(false)

  function onSubmitSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const min = Number(data.get('min'))
    const max = Number(data.get('max'))
    const maxGuesses = Number(data.get('maxGuesses'))
    startGame({ min, max, maxGuesses })
    setShowSettings(false)
  }
  return (
    <div className="flex gap-6">
      {showSettings ? (
        <div>
          <header>
            <h1></h1>
          </header>
          <form className="flex flex-col justify-center-safe gap-6" onSubmit={onSubmitSettings}>
            <div className="flex flex-col gap-1">
              <p>Minimum Number</p>
              <Input defaultValue={0} type="number" placeholder="Minimum guess value" name="min" id="min" />
              <p>Maximum Number</p>
              <Input defaultValue={10} type="number" placeholder="Maximum guess value" name="max" id="max" />
              <p>Allowed Guesses</p>
              <Input defaultValue={3} type="number" placeholder="Allowed Guesses" name="maxGuesses" id="maxGuesses" />
            </div>
            <Button className="px-12">Start Game</Button>
          </form>
        </div>
      ) : (
        <div className="flex text-center justify-center items-center flex-col gap-4">
          <header className="bg-emerald-300 border-2 border-black rounded-md p-4">
            <h1>Guess The Number</h1>
            <p>Set your rules and see if you can guess the number in the lowest amount of attempts</p>
            <p>Click the button to start</p>
          </header>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setShowSettings(true)
            }}
          >
            <Button>Start New Game</Button>
          </form>
        </div>
      )}
    </div>
  )
}
