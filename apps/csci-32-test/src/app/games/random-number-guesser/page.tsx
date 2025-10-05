'use client'
import { useState } from 'react'
import RandomNumberGame from './random-number-game'
import RandomNumberGameMenu from './random-number-game-menu'

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

export function getRandomInt({ min, max }: { min: number; max: number }) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
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
