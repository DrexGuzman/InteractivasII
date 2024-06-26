import { Cuentanos } from './components/Cuentanos';
import { FormRegi } from './pages/FormRegi';
import { useModal } from './hooks/useModal.js';
import { Link, Route, Navigate, Routes } from 'react-router-dom';
import { Login } from './pages/Login.jsx';
import { Vinx } from './pages/Vinx.jsx';
import { Singup } from './pages/Singup.jsx';
import { ResumeActivities } from './pages/ResumeActivities.jsx';
import {ProgressCourses} from './pages/ProgressCourses.jsx'
import { Landing } from './pages/Landing.jsx';
import { ForgotPass } from './pages/ForgotPass.jsx';

function App() {

  return (
   
      <div className='overflow-x-hidden h-[100vh]'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/vinx/*" element={<Vinx />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/newuser" element={<FormRegi/>} />
          <Route path="/vinx.dev" element={< Landing/>} />
        </Routes>
      </div>
   
  );
}

export default App;
