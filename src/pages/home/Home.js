import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home-image'>
        <div className='Home-frost'>
          <Link to='/'>NEW ARRIVALS</Link>
          <Link to='/'>LOOKBOOK</Link>
          <Link to='/'>SHOP ALL</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
