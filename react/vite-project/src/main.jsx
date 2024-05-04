import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css'
import { NavDrawer } from './components/NavDrawer.jsx'
import { MainSection } from './components/MainSection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <div className='overflow-x-hidden h-[100vh]'>
        <NavDrawer />
        <MainSection/>
    </div> 
);
