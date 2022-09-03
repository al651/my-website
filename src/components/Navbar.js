import {Link, NavLink} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
    <div className='nav'>
        <nav className='navBar'>
            <ul className='titleNav'>
                <li className='Title'><Link to="/">ali hamid</Link></li>
            </ul>

            <ul className="navLinks">
                <li><NavLink to="/" activeClassName="inactive">about</NavLink></li>
                <li><NavLink to="/blog" activeClassName="inactive">blog</NavLink></li>
            </ul>
        </nav>
    </div>
    );
}

export default Navbar;