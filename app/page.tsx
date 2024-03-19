import AntClick from '../components/AntClick';
import Jokes from '../components/Jokes';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-center text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
          ant jokes
        </h1>
        <p className="mt-2 text-base text-center text-gray-600">
          Jokes about ants! Click the question to reveal the answer.
        </p>
        <div className="mt-2">
          <Jokes />
          <AntClick />
        </div>
      </main>
      <Footer />
    </>
  );
}
