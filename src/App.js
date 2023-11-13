import React, {useState} from "react";
import Aside from "./сomponents/Aside";
import Content from "./сomponents/Content";
import Header from "./сomponents/Header";
import Profile from "./сomponents/Profile";
import UserImage from "./logo/user.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

function App() {
  const [headerInfo, setHeaderInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    uploadedImage: UserImage,
  });

  function handleSave(data) {
    setHeaderInfo(data);
  }

  function handleExitClick() {
    setHeaderInfo({
      firstName: "",
      lastName: "",
      username: "",
      uploadedImage: UserImage,
    });
  }


  return (
    <div className="App ">
      <div className="wrapper min-vh-100  container-fluid  m-0 p-0" >
     <Aside />

    <div className="container-fluid wrapper-conteiner p-0 d-md-blok ">
     <Header headerInfo={headerInfo} onExitClick={handleExitClick} />
     <Content />
     <Profile onSave={handleSave} headerInfo={headerInfo} />
     </div>

     </div>
    
    </div>
  );
}

export default App;
