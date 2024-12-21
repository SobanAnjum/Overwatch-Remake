import './App.css'
import CharacterSection from './components/Characters/CharacterSection'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
function App() {
  return (
    <>
    <div id="nav" className='absolute top-5 z-50 overflow-hidden'>
      <Nav/>
    </div>
    <Hero/>
    <div className="div overflow-x-hidden">
      <CharacterSection/>
    </div>
    </>
  )
}

export default App
