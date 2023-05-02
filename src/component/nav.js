import React, {useState} from 'react';
import "../component/nav.css"
import dlogo from '../images/dlogo.svg'

function Nav() {
  const [active, setActive] = useState("side");
  const [toggleIcon, setToggleIcon] = useState("bars");

  const navToggle = () => {
    active === "side"
      ? setActive("side side__active")
      : setActive("side");

      toggleIcon === "bars"
        ? setToggleIcon("bars work")
        : setToggleIcon("bars");
  };

  return (
    <div className="header">
      <div className="logos">
          <img src={dlogo} alt="" />
          <span className="dlogos">A</span>
      </div>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="barer1"></div>
        <div className="barer2"></div>
        <div className="barer3"></div>
      </div>
      {/* <div className="active"> */}
      <div className={active}>
        <div className="response">
          <div className="assu"> <a href="#" className="brither"> Home </a></div>
          <div className="assu"> <a href="#" className="brither">About </a></div>
          <div className="assu"> <a href="#" className="brither">Portfolio </a></div>
          <div className="assu"> <a href="#" className="brither">Contact </a></div>
        </div>
        <div className="butt"><a href="https://api.whatsapp.com/send/?phone=2347013779723&text&type=phone_number&app_absent=0" className="ref">Get Access</a></div>
      </div>
    </div>
  )
}

export default Nav