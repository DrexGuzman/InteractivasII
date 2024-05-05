import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { NavDrawer } from './components/NavDrawer.jsx'
import { MainSection } from './components/MainSection.jsx'
import { FormRegi } from './pages/FormRegi.jsx'
import{AddEvent} from './components/AddEvent.jsx'
import{Login} from './pages/Login.jsx'
import{Singup} from './pages/Singup.jsx'
 import{Cuentanos} from './components/Cuentanos.jsx'
 import{DailyTask} from './components/DailyTask.jsx'
    import{Courses} from './components/Courses.jsx'
    import{Filters} from './components/Filters.jsx'
    import{NextEvent} from './components/NextEvent.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <div className='overflow-x-hidden h-[100vh]'>
        
        <NavDrawer/>
        <div className="m-4 text lg:m-auto">
        <div className="grid  grid-cols-1  min-[430px]:grid-cols-2 xs:grid-cols-1 sm:grid-cols-3  gap-x-10 mb-8 px-8">
        <NextEvent />
        <Courses />
        <Filters />
        </div>
        </div>
        <div className="m-4 text lg:m-auto">
        <DailyTask/>
        </div>
    </div> 
);

