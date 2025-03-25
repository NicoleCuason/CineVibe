import {Link} from "react-router-dom";
import "../css/Header.css"

function Header() {
    return <nav className="header">
        <div className="header-brand">
            <Link to= "/">CineVibe</Link>
        </div>
        <div className="header-navlinks">
            <Link to="/" className="header-navlinks">Home</Link>
            <Link to="/favorites" className="header-navlinks">Favorites</Link>
            <Link to="/upcoming" className="header-navlinks">Upcoming</Link>
        </div>
    </nav>
}

export default Header;