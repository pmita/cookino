import './Navbar.css';
//ROUTER
import { Link } from 'react-router-dom';
//COMPONENT
import Searchbar from './Searchbar';

const Navbar = () => {
    return(
        <div className='navbar'>
            <nav>
                <Link to='/' className='brand'>
                    <h1>Cooking with Passion</h1>
                </Link>
                <Searchbar />
                <Link to='/create'>
                    + Create
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;