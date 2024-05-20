import { Cuentanos } from './components/Cuentanos';
import { FormRegi } from './pages/FormRegi';
import { useModal } from './hoocks/useModal.js';
import { Link, Route, Navigate, Routes } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { Vinx } from './pages/Vinx.jsx';
import { Singup } from './pages/Singup.jsx';
import { ResumeActivities } from './pages/ResumeActivities.jsx';
import {ProgressCourses} from './pages/ProgressCourses.jsx'

function App() {
  const handlemodal = useModal();

  return (
   
      <div className='overflow-x-hidden h-[100vh]'>

        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/vinx" element={<Vinx />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/newuser" element={<FormRegi closeModal={handlemodal.openModal} />} />
          <Route path="/newuser" element={<FormRegi closeModal={handlemodal.openModal} />} />
          <Route path="/vinx/dailyTask" element={<ResumeActivities />} />
          <Route path="/vinx/progress" element={<ProgressCourses />} />
        </Routes>
  
        {handlemodal.isOpen && (
          <>
            <Cuentanos modalOpen={handlemodal.openModal} modalClose={handlemodal.closeModal} />
          </>
        )}
      </div>
   
  );
}

export default App;
