import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Movie App</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/details">Details</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;