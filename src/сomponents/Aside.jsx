import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../сomponents/Aside.css';
import LogoImage from './logo.svg'
import {BsGrid1X2, BsCalendar4Event, BsClipboardPlus} from 'react-icons/bs'
import {LiaPawSolid} from 'react-icons/lia'
import {PiGearSix} from 'react-icons/pi'


const Aside = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    }

    
return (
   
    <div className=" aside col-md-3  col-lg-2 navbar navbar-expand-md bg-white m-0 p-0  d-md-inline-block" >
   
     <div className="header-header  container-fluid  d-md-block">
   
                    <a className="navbar-brand" href="#">
                        <img src={LogoImage} className="img-header img-fluid ps-3 pt-0" alt="KKC" />
                    </a>  
                       
                    <button className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`} type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>  
                    </button>   

                    </div>


                    <div className={`collapse navbar-collapse min-vh-sm-100 ${isNavOpen ? 'show' : ''}`} id="navbarTogglerDemo02">
    
<ul className="asideIcons header-menu-link  text-start  navbar-nav  mb-2 mb-md-0 d-md-grid  " id="navbarTogglerDemo02">
  <li className="header-menu nav-item"><BsGrid1X2  className="header-icon"/>  Dashboard</li>
  <li className="header-menu nav-item"><BsCalendar4Event className="header-icon"/>  Events</li>
    <li className="header-menu nav-item"><LiaPawSolid className="header-icon"/>  Pet</li>
 <li className="header-menu nav-item"><BsClipboardPlus className="header-icon"/>  Vet</li>
    <li className="header-menu nav-item"><PiGearSix className="header-icon"/>  Settings</li>
</ul>
</div>

</div>
    
    
)
}

export default Aside;