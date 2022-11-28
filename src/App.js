// import logo from './logo.svg';
import './Appkaran.css'; 
import React, { useState } from 'react'


//components
// import About from './components/about';
import Navbar from './components/Navbar'; 
import TextForm from './components/textform';
import Alert from './components/Alert';
  /*can write js like this  and insted of class here use className and 
          use camel latter style 
          in lable for use htmlFor
          and we can return only one tag
          for return multiple tag use <></>
          every tag must need to close <img />
          this part is called "jsx"
  */
// let name = "kareena";

// import  {
//   BrowserRouter as Router,
//   Routes,
//   Route
  
// } from 'react-router-dom'




function App() {
  const [mode,setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      ShowAlert("Dark Mode Enable..","success") 
      
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("Light Mode Enable..","success") 
    
    }
  }
  const [alert,setAlert] = useState(null);
  const ShowAlert = (msg,type)=>{
      setAlert({
        msg:msg,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const handelColor = (e)=>{
    console.log(e.target.value)
    document.body.style.backgroundColor = `${e.target.value}`;
  }
  const [active , setActive] = useState("Home");
  const change = (msg)=>{
      setActive(msg);
  }
  return (
    <>
    {/* <Router>  */}
       <Navbar title='TextUtil' about='about' mode={mode} toggleMode={toggleMode} handelColor={handelColor} active={active}/>
       <Alert alert={alert}/>
       {/* <Routes> */}
          {/* <Route path="/" element={ <TextForm heading="Enter the text here"  changeHome={change} TextMode={mode} ShowAlert={ShowAlert} />}/> */}
          <TextForm heading="Enter the text here"  changeHome={change} TextMode={mode} ShowAlert={ShowAlert} />
          {/* <Route  path="/about" element={<About change={change}  mode={mode}/>}/> */}
       {/* </Routes> */}
       {/* </Router> */}
    </>
  );
}

export default App;
