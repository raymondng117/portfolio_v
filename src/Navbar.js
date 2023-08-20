import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: "#f1356d" }}>
            <div className="container  justify-content-between ">
                <Link class="navbar-brand" to="/">
                    <img src="https://th.bing.com/th/id/OIG.Z4V92v4aC0ZX_B3uMEU9?pid=ImgGn" width="40" height="40" alt="" /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav mr-auto">
                        <Link to="/" className=" nav-item active nav-link">About</Link>
                        <Link to="/resume" className="nav-item nav-link">Resume</Link>
                        <Link to="/projects" className="nav-item nav-link">Projects</Link>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </div>

        </nav >
    );
}

export default Navbar;
