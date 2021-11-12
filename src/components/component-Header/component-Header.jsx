import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/img/Gear.png";
import './component-Header.css';

const Header = () => {
    return (
        <div className="container p-4">
            <div className="d-flex align-items-center">
                <h3 className="p-1">
                    React Express/Postgress/Virtualized app: author <a href="https://github.com/MichaelArtemev">https://github.com/MichaelArtemev</a>
                </h3>
                <img src={ logo } alt="React" className="rot"/>
            </div>
        </div>
    )
}

export default Header;