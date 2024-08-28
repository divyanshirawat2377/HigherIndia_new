import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.pdf";
import "./navbar.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar" style={{ background: '#ffffff', position: 'fixed' }}>
            <div style={{ width: "355px", height: "50px", border: "none", padding: "0px", margin: "0px", position: "relative" }}>
                <embed src={logo} type="application/pdf" width="100%" height="56.4px" style={{ border: "none", padding: "0px", margin: "0px" }} />
            </div>
        </div>
    );
}
export default Header;