// import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-base text-text flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-display text-9xl">Hola, mundo!</h1>
      <p className="font-sans text-lg">
        Esto es unas palabras para que tomen espacio.
      </p>
      <code>console.log('hello, world.')</code>
    </main>
  )
}
