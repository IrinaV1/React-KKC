import React, { useState, useEffect } from "react";
import UserImage from '../logo/user.jpg';
import '../сomponents/Profile.css';


function Profile({ onSave, headerInfo }) {
  const [uploadedImage, setUploadedImage] = useState(UserImage);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const fileInputRef = React.createRef();


const [activeIndex, setActiveIndex] = useState(0);

const handleClick = (index) => {
  setActiveIndex(index);
}

  function handleImageUpload() {
    fileInputRef.current.click();
  }
  
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
   
  function handleSaveClick() {
    onSave({
      firstName,
      lastName,
      username,
      uploadedImage,
    });
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  useEffect(() => {
    setUploadedImage(headerInfo.uploadedImage);
    setFirstName(headerInfo.firstName);
    setLastName(headerInfo.lastName);
    setUsername(headerInfo.username);
  }, [headerInfo]);
   
  
      
  return ( 
    <div className="main-profile container-fluid min-vh-75 m-auto  mt-sm-auto  p-0 mb-md-4  col-xl-9 col-md-10">
    <div className="main-profile-container w-100 ">
        <div className="profile ">Profile</div>

        <div className="profile-info container-fluid ">
            <ul className="profile-li">
              {['User Info', 'Address', 'Contact', 'Social Networks'].map((item, index) => ( 
                <li
                 key={index}
                   className={`profile-info-li ${activeIndex === index ? 'active' : ''} `}
onClick={() => handleClick(index) }
>
        {item} 
      </li> 
              ))}
            </ul>


            <div className="profile-img">
                <img className="profile-img-user" src={uploadedImage || UserImage} alt="User" />
            </div>
            <input type="file" id="fileInput" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
        

            <button className="profile-button" onClick={handleImageUpload}>Upload your photo</button>
        </div>


        <form action="#" method="get" className="profile-form  row-cols-lg-9 ">
            <p className="first-name ps-2 pb-0 mt-3 mb-1">First Name <span className="form-name">*</span> </p>
                <input type="text" onChange={handleFirstNameChange} className="form-control ps-2 pe-2" id="first-name" placeholder="Jack" />
           
            <p className="last-name ps-2 pb-0 mt-3 mb-1">Last Name <span className="form-name">*</span></p>
                <input type="text" onChange={handleLastNameChange} className="form-control w-100 ps-2 pe-2"  id="last-name" placeholder="Douglas" />
            
            <p className="username ps-2 pb-0 mt-3 mb-1">Username </p>
                <input type="text" onChange={handleUsernameChange} className="form-control ps-2 pe-2"  id="username" placeholder="JackD" />
            
            <button type="button" className="profile-save mt-4" onClick={handleSaveClick}>Save</button>

        </form>



    </div>
</div>

  )
}

export default Profile;