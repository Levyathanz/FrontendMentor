import { useState } from "react"
import hamburger from '../assets/images/icon-hamburger.svg'
import logo from "../assets/images/logo.svg"

const Navbar = () => {

  const[menubar,setMenubar] = useState(false);

  const handleMenubar = () =>{
    if(menubar){
      setMenubar(false)
    }else{
      setMenubar(true)
    }
  }

  return (
    <nav>
          <img src={logo} alt="logo" />
          <div className={menubar?'hamburger-menubar menubar':'menubar'}>
            <ul>
              <li>About</li>
              <li>Service</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <button className="hamburger" onClick={handleMenubar}>
            <img src={hamburger} alt="#"/>
          </button>
    </nav>
  )
}

export default Navbar
