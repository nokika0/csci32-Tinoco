'use client'
import { useState } from 'react'
import RandomNumberGame from './random-number-game'
import RandomNumberGameMenu from './random-number-game-menu'
import { getRandomInt } from '@repo/ui/math'

export interface gameProps {
  min: number
  max: number
  maxGuesses: number
}

export interface guessGameProps {
  startGame: (props: gameProps) => void
}

export interface guessGameEngineProps {
  randomNumber: number
  maxGuesses: number
  endGame: () => void
}

export default function RandomNumberGamePage() {
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [randomNumber, setRandomNumber] = useState(0)
  const [maxGuesses, setMaxGuesses] = useState(0)

  function startGame({ min, max, maxGuesses }: gameProps) {
    const randNumber = getRandomInt({ min, max })
    setRandomNumber(randNumber)
    setMaxGuesses(maxGuesses)
    setIsGameRunning(true)
  }

  function endGame() {
    setIsGameRunning(false)
  }

  return (
    <div className="flex justify-center p-24">
      {isGameRunning ? (
        <RandomNumberGame endGame={endGame} randomNumber={randomNumber} maxGuesses={maxGuesses} />
      ) : (
        <RandomNumberGameMenu startGame={startGame} />
      )}
    </div>
  )
}
