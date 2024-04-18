import './App.css'
import { Header } from './components/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer.jsx'

function App() {


  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
