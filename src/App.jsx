import Header from './components/Header'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Flavors from './components/Flavors'
import Process from './components/Process'
import AboutDebora from './components/AboutDebora'
import Experience from './components/Experience'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-chocolate">
      <Header />

      <main>
        <Hero />

        <Manifesto />

        <Flavors />

        <Process />

        <AboutDebora />

        <Experience />

        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App