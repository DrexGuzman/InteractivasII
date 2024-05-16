
import { Cuentanos } from './components/Cuentanos'
import { FormRegi } from './pages/FormRegi'
import { useModal } from './hoocks/useModal.js'
function App() {

  const handlemodal =useModal();

  return (
   <>    
   {handlemodal.isOpen && (
    <>
      <Cuentanos modalOpen={handlemodal.openModal} modalClose={handlemodal.closeModal}></Cuentanos>
      
    </>
   )}

      <FormRegi closeModal={handlemodal.openModal}/>
   </>

  )


 /*  const[isModalOpen, setIsModalOpen]=useState(false);
  return <div className="App">
   
    <Modal isOpen={isModalOpen} closeModal={()=>setIsModalOpen(false)}/>
  </div> */
}

export default App
