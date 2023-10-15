import Image from 'next/image'
import AntClick from '../components/AntClick'
import Jokes from '../components/Jokes'

export default function Home() {
  return (
    <main>
      <h1>welcome to ant jokes</h1>
      <p>click the question to see the answer</p>
      <Jokes />
      <AntClick />
    </main>
  )
}
