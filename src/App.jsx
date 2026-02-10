import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import SortingVisualiser from './components/SortingVisualiser.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="h-screen w-full bg-gray-100">
        <SortingVisualiser />
      </div>
      <Footer />
    </>
  )
}

export default App
