import Image from 'next/image'
import AntClick from '../components/AntClick'

export default function Home() {
  return (
    <main>
      <h1>welcome to ant jokes</h1>
      <p>
        what do you call a big ant? a gi-ant
      </p>
      <p>
        what do you call a smart ant? brilli-ant
      </p>
      <AntClick />
    </main>
  )
}
