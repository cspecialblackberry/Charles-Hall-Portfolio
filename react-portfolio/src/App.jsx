import './App.css'
import { Header } from './components/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer.jsx'

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
