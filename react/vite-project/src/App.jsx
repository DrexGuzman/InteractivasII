import { Cuentanos } from './components/Cuentanos';
import { FormRegi } from './pages/FormRegi';
import { useModal } from './hoocks/useModal.js';
import { Link, Route, Navigate, Routes } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { Vinx } from './pages/Vinx.jsx';
import { Singup } from './pages/Singup.jsx';
import { ResumeActivities } from './pages/ResumeActivities.jsx';
import {ProgressCourses} from './pages/ProgressCourses.jsx'
import { AddEvent } from './components/AddEvent.jsx';
import { Landing } from './pages/Landing.jsx';

function App() {
  const modalCuentanos = useModal();


  return (
   
      <div className='overflow-x-hidden h-[100vh]'>

        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/vinx" element={<Vinx />} />
         
          <Route path="/singup" element={<Singup />} />
          <Route path="/newuser" element={<FormRegi closeModal={modalCuentanos.openModal} />} />
          <Route path="/vinx/dailyTask" element={<ResumeActivities />} />
          <Route path="/vinx/progress" element={<ProgressCourses />} />
          <Route path="/vinx.dev" element={< Landing/>} />
        </Routes>
  
        {modalCuentanos.isOpen && (
          <>
            <Cuentanos modalOpen={modalCuentanos.openModal} modalClose={modalCuentanos.closeModal} />
          </>
        )}

        
      </div>
   
  );
}

export default App;
