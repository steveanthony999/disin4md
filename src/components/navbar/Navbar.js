import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import Cart from '../../assets/cart-1.svg';
import './Navbar.css';

const Navbar = ({ cart }) => {
  return (
    <nav className='Navbar'>
      <Paper className='Navbar-inner-container' elevation={12}>
        <Link to='/' className='logo'>
          DISIN4MD
        </Link>
        <div className='Navbar-links'>
          <a
            href='https://discord.gg/CyQUnFZJ'
            target='_blank'
            rel='noreferrer'>
            COMMUNITY
          </a>
          <Link to='/cart'>
            <div className='Navbar-cart'>
              CART
              <img src={Cart} alt='cart' />
              <p>{cart}</p>
            </div>
          </Link>
        </div>
      </Paper>
    </nav>
  );
};

export default Navbar;
