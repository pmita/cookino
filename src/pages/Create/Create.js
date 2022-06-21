import { useState, useRef, useEffect } from 'react';
//HOOKS
import { useFetch } from '../../hooks/useFetch';
//ROUTER
import { useNavigate } from 'react-router-dom';
import './Create.css';

const Create = () => {
    //STATE & VARIALBES
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientsInput = useRef(null);
    const { postData, data } = useFetch('http://localhost:3000/recipes', 'POST');
    const navigate = useNavigate();
    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ 
            title, 
            ingredients, 
            method, 
            cookingTime: cookingTime + ' minutes' })
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim(); //remove any white space the user might have added by accident
        if(ing && !ingredients.includes(ing)){
            setIngredients((prevIngredient) => [...prevIngredient, ing])
        }

        setNewIngredient('');
        ingredientsInput.current.focus();
    }

    //useEFFECT
    useEffect(() => {
        if(data){
            navigate('/')
            console.log(data);
        }
    }, [data, navigate])
    return(
        <div className='create'>
            <h2 className='page-title'>Add a New Recipe</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe Title</span>
                    <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Recipe ingredients</span>
                    <div className='ingredients'>
                        <input 
                            type='text' 
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientsInput}
                        />
                        <button onClick={handleAdd} className='btn'>add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map(ing => <em key={ing}>{ing}, </em>)}</p>

                <label>
                    <span>Recipe Method</span>
                    <textarea
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Cooking Time, in minutes</span>
                    <input
                        type='number'
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>
                <button className='btn'>Submit</button>
            </form>
        </div>
    );
}

export default Create;