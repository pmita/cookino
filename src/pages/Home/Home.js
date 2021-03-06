import './Home.css';
//HOOKS
import { useFetch } from '../../hooks/useFetch';
//COMPONENTS
import RecipeList from '../../components/RecipeList';

const Home = () => {
    //STATE &&VARIABLES
    const { data, isPending, error } = useFetch('http://localhost:3000/recipes');
    return(
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    );
}

export default Home;