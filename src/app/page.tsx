import About from "./_section/About";
import Banner from "./_section/Banner";
import { CardStackDemo } from "./_section/CardStack";
import { Content } from "./_section/Content";
import Hero from "./_section/Hero";

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center text-center cursor-default select-none'>
      <Hero />
      <About />
      <Content />
      <Banner />
      <CardStackDemo />
    </main>
  )
}
