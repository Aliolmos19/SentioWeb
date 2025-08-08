import Header from '@/components/header'
import About from '@/components/about'
import Hardware from '@/components/hardware'
import Features from '@/components/features'
import Team from '@/components/team'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Hardware />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
