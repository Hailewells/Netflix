import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        handleShow(true);
      }else{
        handleShow(false);
      }
    });
    return () => {window.removeEventListener('scroll')};
  },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo'
        src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png" alt="Netflix logo" />
        <img className='nav__avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Avatar logo" />
      
    </div>
  )
}

export default Nav
