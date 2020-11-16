import React, { useState, useEffect} from "react";
import fire from './config/firebase'
import "./App.css";
import {name} from './Signupsuccess'
var abc=""


/*function Emailset(){var userrr=fire.auth().currentUser
    if(userrr!=null)
    {//return{__html:userrr.email}
    abc=userrr.email
}

    else if(userrr==null)
    {
        //return{__html: "SIGN IN | SIGN UP"}
        abc="SIGN IN | SIGN UP"
    }
}*/
function Header() {/*var userrr=(fire.auth().currentUser);
    if(userrr!=null)
    {abc=userrr.email}
    else if(userrr==null)
    {abc="SIGN IN | SIGN UP"}*/
    
  const [open, setOpen] = useState(false);
  const [email,isEmail]=useState(null);
  var user=fire.auth().currentUser;

    
  /*  if(user!=null)
    {
            isEmail(user.email)

            
        
           document.querySelector(".signinbtn").innerHTML=user.email;

    }
    else if(user==null){
        isEmail(null)
        document.querySelector(".signinbtn").innerHTML="SIGN IN";
    }*/


  const emailse=()=>{var userr=fire.auth().currentUser
        if(userr!=null){isEmail(true)
        abc=userr.email
    return abc}

        if(userr==null){return("SIGN IN")}
  }
  return (
    <div className="app__logo">
      <nav>
        <div className="logo">
          <img
            className="app__logoImg"
            src="https://drive.google.com/uc?export=download&id=1A4jKLpG64ARhn9SdurjGrgHKNtW8X_RZ"
            alt=""
          />
        </div>

        <div className="searchBar">
          <input
            className="searchtxt"
            type="text"
            name=""
            placeholder="Type to search"
          />
          <a className="searchButton" href="search">
            <i className="searchimg" class="fas fa-search"></i>
          </a>
        </div>

        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <a id="navbtn" href="/">HOME</a>
          </li>
          <li>
            <a id="navbtn" href="about">ABOUT US</a>
          </li>
          <li>
            <a id="navbtn" href="services">SERVICES</a>
          </li>
          <li>
            <a id="navbtn" href="contact">CONTACT US</a>
          </li>
        
          <li>
            <a id="navbtn" className="signinbtn" href="login" >{emailse()}</a>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default Header;

/* function Header() {
    return (<div className="header">
        
        <div className="header__logo">
            <img className="header__logoImg" src="https://drive.google.com/uc?export=download&id=1A4jKLpG64ARhn9SdurjGrgHKNtW8X_RZ" alt="" />

            </div>

        

            <div className="header__searchBar">
                  <input className="header__searchIn" placeholder="search"/>

            </div>



            <div className="header__menu">
                <div className='header__option'>
                    <span
                    classNme='header__optionName'>HOME</span>
                    </div>

                    <div className='header__option'>
                    <span
                    className='header__optionName'>ABOUT US</span>
                    </div>

                    <div className='header__option'>
                    <span
                    className='header__optionName'>CONTACT US</span>
                    </div>

                    <div className='header__option'>
                    <span
                    className='header__optionName'>SERVICES</span>
                    </div>

                    <div className='header__option'>
                    <span
                    className='header__optionName'>SIGN IN/SIGN UP</span>
                    </div>  
            </div>
            </div>
    );
}

export default Header 
*/
