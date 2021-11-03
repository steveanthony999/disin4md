import { Link } from 'react-router-dom';
import './Home.css';

import DowmArrow from '../../assets/arrow-down-1.svg';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home-image'>
        <div className='Home-vertical-line'></div>
        <div className='Home-frost'>
          <Link to='/'>NEW ARRIVALS</Link>
          <Link to='/'>LOOKBOOK</Link>
          <Link to='/'>SHOP ALL</Link>
        </div>
      </div>
      <img src={DowmArrow} alt='arrow' className='Home-down-arrow' />
    </div>
  );
};

export default Home;
