import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <div className='Navbar-inner-container'>
        <h1>DISIN4MD</h1>
        <div className='Navbar-links'>
          <a
            href='https://discord.gg/CyQUnFZJ'
            target='_blank'
            rel='noreferrer'>
            COMMUNITY
          </a>
          <Link to='/'>SHOP</Link>
          <Link to='/'>CART</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
