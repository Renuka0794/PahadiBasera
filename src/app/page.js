
import Hero from './hero'
import MyGallery from './mygallery'
import RoomsShowcase from './roomsShowcase'
import Footer from './footer'
import Navbar from './navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="z-10  w-full font-mono text-sm lg:flex">
        <Navbar />
        <Hero/>
      </div>
      <RoomsShowcase />
      <MyGallery />
      <Footer/>
    </main>
  )
}
