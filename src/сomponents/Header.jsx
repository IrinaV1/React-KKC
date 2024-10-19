import React from 'react'
import {BsBell} from 'react-icons/bs';
import {RxExit} from 'react-icons/rx';
import 'bootstrap/dist/css/bootstrap.css';
import UserImage from '../logo/user.jpg';
import '../сomponents/Header.css';
import { IoSearchOutline } from "react-icons/io5";

function Header({ headerInfo, onExitClick }) {
   

  
  return ( 
                <div className="navbar row row-cols-sm-auto   m-0 p-0" style= {{'--bs-gap': '.5rem'}}>
                   
<div className="col-sm-2 col-md-3 col-lg-2 p-2 gx-sm-3" >
    <div className="navbar-header">
                        <ul className="navbar-header-ul ">
                            <li className="navbar-header-hello">Hello,{headerInfo.username || "Jack"} </li>
                            <li className="navbar-header-li">3.15pm 10 Aug 2023</li>
                        </ul>
                    </div>
                    </div>


                <div className="col-sm-6 col-md-6 col-lg-7 p-0 pe-1 ps-0 ">
                    <form className="navbar-form" role="search">
                  <div className='navbar-search-n'> <IoSearchOutline className='navbar-search' /> </div> 
                        <input className="navbar-input  ps-8 pe-2" type="text"  placeholder="Search" /> 
                      
                        <button className="navbar-button" type="submit"><BsBell /> <i className="bi bi-bell"></i>
                        <span className="position-absolute top-5 start-90 translate-middle p-1 bg-danger border border-light rounded-circle" >
                                <span className="visually-hidden">New alerts</span></span>
                                </button>
                    </form>
                </div>

<div className="col-sm-3 col-md-3 col-lg-2 p-0 pe-2">
                    <div className="navbar-personal row flex-sm-nowrap p-sm-0   pe-2 ">
                       
                                <ul className="navbar-personal-ul col-5 col-md-5 col-lg-5 d-xs-none w-sm-50 pe-0 ">
                                    <li className="navbar-personal-li">{headerInfo.firstName || "Jack"}</li>
                                    <li className="navbar-personal-lii">{headerInfo.lastName || "Douglas"}</li>
                                </ul>
                            
               
                                <div className="navbar-user col-4 col-md-4 col-lg-3">
                                    <img src={headerInfo.uploadedImage  || UserImage} alt="user" className="navbar-user" />
                                </div>
                         
                   
                                <div className="navbar-exit col-3 col-md-3 col-lg-4 p-1">
                                  <RxExit className="navbar-exit exit" type="button" onClick={onExitClick} /> 
                                  
                                </div>
                         
                        </div> 
                    
                </div>
      
                </div>
  )
}


export default Header