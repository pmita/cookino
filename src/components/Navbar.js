import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
//ROUTER
import { Link } from 'react-router-dom';
//COMPONENT
import Searchbar from './Searchbar';
import './Navbar.css';

const Navbar = () => {
    //STATE & VARIABLES
    const { color } = useContext(ThemeContext);
    return(
        <div className='navbar' style={{ background: color }}>
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