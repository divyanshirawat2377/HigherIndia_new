// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "./logo.png";
// import "./navbar.css";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="navbar" style={{ background: '#ffffff', position: 'fixed' }}>
//       <div>
//         <img src={logo} alt="logo" className="nav-img" />
//       </div>
//       <div className={`parent-nav ${isOpen ? "active" : ""}`}>
//         <div className="child-nav"><Link to="/" onClick={toggleMenu}>Home</Link></div>
//         <div className="child-nav"><Link to="/About" onClick={toggleMenu}>About</Link></div>
//         <div className="child-nav"><Link to="/Solution" onClick={toggleMenu}>Solution</Link></div>
//         <div className="child-nav"><Link to="/Connect" onClick={toggleMenu}>Contact</Link></div>
//         {/* <div className="btn-div">
//           <button className="btn-nav"><Link to="/Login" onClick={toggleMenu}>Login</Link></button>
//           <button className="btn-nav"><Link to="/Signup" onClick={toggleMenu}>Sign up</Link></button>
//         </div> */}
//       </div>


//       {isOpen && (
//         <div className="menu-toggle" onClick={toggleMenu}>
//           <i className="fas fa-times"></i>
//         </div>
//       )}
//       {!isOpen && (
//         <div className="menu-toggle" onClick={toggleMenu}>
//           <i className="fas fa-bars"></i>
//         </div>
//       )}
//     </div>
//   );
// }
// export default Header;


/********************NEW CODE ***********************/
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "./Logo.pdf";
import logo from "./LOGO1.png";
import "./navbar.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar" style={{ background: '#ffffff', position: 'fixed' }}>
      {/* <div style={{width:"355px", height:"50px" , border:"none",padding:"0px",margin:"0px",position:"relative"}}>
        <embed src={logo} type="application/pdf" width="100%" height="56.4px" style={{border:"none", padding:"0px",margin:"0px",boxShadow:"none"}} />
      </div>  */}

      <div>
        <img src={logo} alt="logo" className="nav-img"/>
      </div> 


      <div className={`parent-nav ${isOpen ? "active" : ""}`}>
        <div className="child-nav"><Link to="/" onClick={toggleMenu}>Home</Link></div>
        <div className="child-nav"><Link to="/About" onClick={toggleMenu}>About</Link></div>
        <div className="child-nav"><Link to="/Solution" onClick={toggleMenu}>Solution</Link></div>
        <div className="child-nav"><Link to="/Connect" onClick={toggleMenu}>Contact</Link></div>
        {/* <div className="btn-div">
          <button className="btn-nav"><Link to="/Login" onClick={toggleMenu}>Login</Link></button>
          <button className="btn-nav"><Link to="/Signup" onClick={toggleMenu}>Sign up</Link></button>
        </div> */}
      </div>
      {isOpen && (
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
      )}
      {!isOpen && (
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      )}
    </div>
  );
}
export default Header;
