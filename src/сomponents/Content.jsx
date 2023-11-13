import React from 'react';
import '../сomponents/Content.css'
import 'bootstrap/dist/css/bootstrap.css';

const Content = () => {
  return (
    <div className="Content">
        
        <div className="listItem mb-5">

<ul className="menuLink">
    <li> <a className="menuLink" href="#">Home / </a></li>
    <li> <a className="menuLink" href="#">Profile / </a></li>
    <li> <a className="menuLinkUser" href="#">User Info</a> </li>
</ul>


</div>
    </div>
  )
}

export default Content