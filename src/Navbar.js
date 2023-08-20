import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="row justify-content-between align-items-center">
                <div className="col-5">
                    <h1 className="mr-auto">This is Raymond</h1>
                </div>

                <div className="col-7 justify-content-end">
                    <ul className="list-unstyled m-0 d-flex links">
                        <li className="ml-3"><Link to="/" className="btn btn-secondary">About me</Link></li>
                        <li className="ml-3"><Link to="/resume" className="btn btn-secondary">Resume</Link></li>
                        <li className="ml-3"><Link to="/projects" className="btn btn-secondary">Projects</Link></li>
                        <li className="ml-3"><Link to="/contact" className="btn btn-secondary">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
