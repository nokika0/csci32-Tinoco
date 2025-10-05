'use client'
import { Button } from '@repo/ui/button'
import guessGameProps, { guessGameEngineProps } from './page'
import Input from '@repo/ui/input'
import { useState } from 'react'
import { Variant } from '@repo/ui/variant'

export default function RandomNumberGame({ randomNumber, endGame, maxGuesses }: guessGameEngineProps) {
  const [guessCount, setGuessCount] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [guess, setGuess] = useState(0)
  const [hasWon, setGameOver] = useState(false)

  function submitGuess(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newGuessCount = guessCount + 1
    if (guess < randomNumber) {
      setFeedback('Go Higher')
    } else if (guess > randomNumber) {
      setFeedback('Go Lower')
    } else if (guess === randomNumber) {
      setFeedback(`You Win! You guessed the number ${randomNumber} in ${newGuessCount} guesses.`)
      setGameOver(true)
    }
    if (newGuessCount === maxGuesses) {
      setFeedback(`You Lose! The correct number was ${randomNumber}.`)
      setGameOver(true)
    }
    setGuessCount(newGuessCount)
  }

  function onSubmitGameEnd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setGuessCount(0)
    setFeedback('')
    setGuess(0)
    setGameOver(false)
    endGame()
  }
  return (
    <div
      className={`${maxGuesses - 1 === guessCount ? 'bg-red-50' : ''}
    ${maxGuesses === guessCount ? 'bg-red-500 border-3 rounded-md' : ''}
    ${hasWon ? 'bg-emerald-400' : ''} p-4 `}
    >
      {hasWon ? (
        <form className="flex flex-col gap-4" onSubmit={onSubmitGameEnd}>
          <div>{feedback}</div>
          <Button>End Game</Button>
        </form>
      ) : (
        <form onSubmit={submitGuess}>
          <Input
            name="guess"
            id="guess"
            type="number"
            placeholder="Input your guess"
            value={guess}
            setValue={(newValue) => setGuess(Number(newValue))}
          />
          <div>{feedback}</div>
          <div>Guess Count: {guessCount}</div>
          {/* <div>Correct Number: {randomNumber}</div> extra prop for debugging to test game logic */}
          <div>Max Guesses: {maxGuesses}</div>
          <Button>Enter</Button>
        </form>
      )}
    </div>
  )
}
