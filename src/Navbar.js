import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>This is Raymond</h1>
            <Link to="/" className="btn btn-secondary">About me</Link>
            <Link to="/resume" className="btn btn-secondary">Resume</Link>
            <Link to="/projects" className="btn btn-secondary">Projetcs</Link>
            <Link to="/contact" className="btn btn-secondary">Contact</Link>
        </nav>
    );
}

export default Navbar;