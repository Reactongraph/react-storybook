import React, { useState } from 'react';
import './Sidebar.css'; // Make sure to create this file and add the CSS from the first code snippet

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
   
    const toggleNav = () => {
        console.log("open")
       setIsOpen(!isOpen);
    };
   console.log(isOpen)
    return (
       <div>
         <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
           <button className="closebtn" onClick={toggleNav}>&times;</button>
           <button >Home</button>
           <button>Tags</button>
           <button>About</button>
           <button>Contact</button>
         </div>
         <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={toggleNav}>&#9776;</span>
       </div>
    );
   };
   

export default Sidebar;