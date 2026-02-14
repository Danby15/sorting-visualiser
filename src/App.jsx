import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import SortingVisualiser from './components/SortingVisualiser.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <SortingVisualiser />
      <Footer />
    </>
  )
}

export default App
