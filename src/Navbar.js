import { Link } from "react-router-dom";

const Navbar = () => {
     return (
        <nav className="navbar container">
            <div className="d-flex justify-content-between align-items-center">

                <h1>This is Raymond</h1>
                <ul className="list-unstyled m-0 d-flex">
                    <li className="ml-3"><Link to="/" className="btn btn-secondary">About me</Link></li>
                    <li className="ml-3"><Link to="/resume" className="btn btn-secondary">Resume</Link></li>
                    <li className="ml-3"><Link to="/projects" className="btn btn-secondary">Projects</Link></li>
                    <li className="ml-3"><Link to="/contact" className="btn btn-secondary">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;