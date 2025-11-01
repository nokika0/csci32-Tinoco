import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { gqlClient, setAuthToken, clearAuthToken } from '../services/graphql-client'
import { graphql } from '../generated/gql'
import type { SignUpInput, SignInInput, AuthPayload, UserDto } from '../generated/graphql'
import { ClientError } from 'graphql-request'

// Define the mutations using codegen graphql function
const SIGN_UP_MUTATION = graphql(`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      token
      user {
        user_id
        name
        email
      }
    }
  }
`)

const SIGN_IN_MUTATION = graphql(`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        user_id
        name
        email
      }
    }
  }
`)

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<UserDto | null>(null)
  const router = useRouter()

  const extractErrorMessage = (err: unknown, fallback: string): string => {
    if (err instanceof ClientError) {
      return err.response?.errors?.[0]?.message || fallback
    }
    return fallback
  }

  const signUp = async (input: SignUpInput): Promise<AuthPayload | null> => {
    try {
      setIsLoading(true)
      setError(null)
      const result = await gqlClient.request(SIGN_UP_MUTATION, { input })

      if (result.signUp) {
        setAuthToken(result.signUp.token)
        setUser(result.signUp.user)
        localStorage.setItem('authUser', JSON.stringify(result.signUp.user))
        router.push('/dashboard')
        return result.signUp
      }
      return null
    } catch (err) {
      setError(extractErrorMessage(err, 'Sign up failed'))
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = async (input: SignInInput): Promise<AuthPayload | null> => {
    try {
      setIsLoading(true)
      setError(null)
      const result = await gqlClient.request(SIGN_IN_MUTATION, { input })

      if (result.signIn) {
        setAuthToken(result.signIn.token)
        setUser(result.signIn.user)
        localStorage.setItem('authUser', JSON.stringify(result.signIn.user))
        router.push('/dashboard')
        return result.signIn
      }
      return null
    } catch (err) {
      setError(extractErrorMessage(err, 'Sign in failed'))
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    clearAuthToken()
    setUser(null)
    localStorage.removeItem('authUser')
    setError(null)
  }

  const clearError = () => setError(null)

  return {
    isLoading,
    error,
    user,
    signUp,
    signIn,
    signOut,
    clearError,
  }
}
