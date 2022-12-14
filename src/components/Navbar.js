import React from 'react'
import propTypes from 'prop-types'
// import {Link} from 'react-router-dom'
export default function Navbar(props) {


  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid ">
      <a className={`navbar-brand text-${props.mode==='light'?'black':'light'}`} href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
             
            <a className={`nav-link active text-${props.active==="Home"?"success":(props.mode==='light'?'black':'light')}`}  aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className={`nav-link active text-${props.active==="About"?"success":(props.mode==='light'?'black':'light')}`} href="/about">{props.about}</a>
          </li> */}
          
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className={`btn btn-outline-success text-${props.mode==='light'?'black':'light'}`} type="submit">Search</button>
        </form> */}
        <div className={`form-check   form-switch mx-3 text-${(props.mode==='light'?'black':'light')}`}>
             Choose Colour  <input className='nav-item mt-2 mx-2' type="color"   id="color" onBlur={props.handelColor} />
        </div>
        <div className="form-check form-switch mx-3 ">
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className= {`form-check-label text-${props.mode==='light'?'black':'light'}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
           
        </div>
      </div>
    </div>
  </nav>
  )
}
  
Navbar.propTypes = {
    title: propTypes.string.isRequired,
    about : propTypes.string.isRequired
}

Navbar.defaultProps = {
    title:"kava",
    about:"about us"
}