import './App.css'
import Contactheader from './components/Contactheader/Contactheader'
import Navigation from './components/Navigation/Navigation'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

  return (
    <div>
      <Navigation />
      <main className='main_container'>
        <Contactheader />
        <ContactForm />
      </main>
    </div>
  )
}

export default App
