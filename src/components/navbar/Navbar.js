import { motion } from 'framer-motion';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import Cart from '../../assets/cart-1.svg';
import './Navbar.css';

const Navbar = ({ cart }) => {
  return (
    <nav className='Navbar'>
      <Paper className='Navbar-inner-container' elevation={8}>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}>
          <Link to='/' className='logo'>
            DISIN4MD
          </Link>
        </motion.div>
        <div className='Navbar-links'>
          <motion.a
            href='https://discord.gg/CyQUnFZJ'
            target='_blank'
            rel='noreferrer'
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}>
            COMMUNITY
          </motion.a>
          <Link to='/cart'>
            <motion.div
              className='Navbar-cart'
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}>
              CART
              <img src={Cart} alt='cart' />
              <p>{cart}</p>
            </motion.div>
          </Link>
        </div>
      </Paper>
    </nav>
  );
};

export default Navbar;
