import './Search.css';
//ROUTER
import { useLocation } from 'react-router-dom';
//HOOKS
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

const Search = () => {
    //STATE & VARIABLES
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString); //create new URLSearchParams object
    const query = queryParams.get('query');
    const url = 'http://localhost:3000/recipes?q=' + query;
    const { data, isPending, error } = useFetch(url);

    return(
        <div>
            <h2 className='page-title'>Recipes including "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    );
}

export default Search;