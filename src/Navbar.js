import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#f1356d" }}>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container-fluid" style={{ backgroundColor: "#f1356d" }}>
                    {/* Brand */}
                    <Link className="navbar-brand " to="/">
                    <img className="icon-logo me-3" src="https://th.bing.com/th/id/OIG.TVr2ztQMLlRNI8KfikTH?pid=ImgGn" alt="it-sea-otter" />
                   
                   
                    {/* SeeAllThe  */}
                    </Link>

                    {/* Toggle button for collapsed menu on smaller screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links */}
                    <div className="collapse navbar-collapse" style={{ backgroundColor: "#f1356d" }} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume" className="nav-link">
                                    Resume
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link">
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


