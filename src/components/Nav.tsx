import { Link } from 'react-router-dom';
import '../index.css';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className='nav'>
      <Link key={1} to="/" className='nav-link'>Home</Link>
      <Link key={2} to="/SavedCandidates" className='nav-link'>Saved Candidates</Link>
    </nav>
  )
};

export default Nav;
