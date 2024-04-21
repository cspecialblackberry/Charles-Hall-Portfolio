import './App.css'
import { Header } from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'

function App() {


  return (
    <>

      <main>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </main>

    </>
  )
}

export default App
