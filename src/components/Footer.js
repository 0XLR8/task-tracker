import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer mt-auto pt-3 mt-4 text-center">
            <div className="mb-2">
                <Link to="/">Home</Link>
                <span className="mx-2">|</span>
                <Link to="/about">About</Link>
            </div>
            <p>© Copyright XRL</p>
        </footer>
    )
}

export default Footer;