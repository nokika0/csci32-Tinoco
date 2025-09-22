import Main from './components/main'
import Header from './components/header'
import { Button } from '@repo/ui/button'

export default function Home() {
  return (
    <>
      <Header>
        <div className="flex flex-row items-center gap-2">
          <Button href="/input">INPUT PAGE</Button>
          Test Header add site buttons later
        </div>
      </Header>

      <Main>This is a test to see if my component is functional</Main>
    </>
  )
}
