import './App.css'
import { Form } from './components/sections/Form'
import { Footer } from './components/Navbar&Footer/Footer'
import { Navbar } from './components/Navbar&Footer/Navbar'
import { GreenTechnologies } from './components/sections/GreenTechnologies'
import { Hero } from './components/sections/Hero'
import { ProjectList } from './components/sections/ProjectList'
import { Reviews } from './components/sections/Reviews'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <GreenTechnologies />
      <Reviews />
      <Form />
      <ProjectList />
      <Footer />
    </>
  )
}

export default App
