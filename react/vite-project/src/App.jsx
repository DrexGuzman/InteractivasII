import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './assets/components/modal'

function App() {
// const [count, setCount] = useState(0)

  // return (
    
  // )


  const[isModalOpen, setIsModalOpen]=useState(false);
  return <div className="App">
   
    <Modal isOpen={isModalOpen} closeModal={()=>setIsModalOpen(false)}/>
  </div>
}

export default App
