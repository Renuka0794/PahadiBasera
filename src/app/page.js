import Hero from './hero'
import RoomsShowcase from './roomsShowcase'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="z-10  w-full font-mono text-sm lg:flex">
        <Hero/>
      </div>
      <RoomsShowcase />
    </main>
  )
}
