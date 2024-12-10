import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Movie App</h1>
      <ul className="navbar-links">
        <li><Link to="/">로그인</Link></li>
        <li><Link to="/details">회원가입</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;