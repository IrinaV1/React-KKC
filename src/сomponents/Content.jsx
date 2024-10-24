
import React, {useState} from 'react';
import '../сomponents/Content.css'
import 'bootstrap/dist/css/bootstrap.css';

const Content = () => {

const [activeIndex, setActiveIndex] = useState(2);
const handleLinkClick = (index) => {
setActiveIndex(index);
}
  return (
    <div className="Content">
        
        <div className="listItem mb-5">

<ul className="menuLink">
  {['Home /', 'Profile /', 'User Info'].map((item, index) => (    
    <li key={index}> <a className={activeIndex === index ? 'menuLinkUser' : 'menuLink'}
    href="#"
onClick={() => handleLinkClick(index)}
    >
      {item}
    </a>
    </li>
 
    ))}

</ul>


</div>
    </div>
  )
}

export default Content