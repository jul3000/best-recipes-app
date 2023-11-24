import './App.css';
import { useEffect, useState } from 'react';
import video from './cooking.mp4';
import './App.css';
import MyRecipesComponents from './MyRecipesComponent';

function App() {

  const MY_ID = "3be47c94";
  const MY_KEY = "0cf0c9225841f81394d5963adcff288f";

  const [mySearch, setMySearch] = useState ("");
  const [myRecipes, setMyRecipes] = useState ([]);
  const [wordSubmitted, setWordSubmitted] = useState ("chicken");

  useEffect (() => {
    const getRecipe = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
      console.log(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>

        <h1>Find a recipe</h1>
      </div>

      <div className='container'>
      <form onSubmit={finalSearch}>
         <input className='search' type="text" placeholder="Type an ingredient or a dish" onChange={myRecipeSearch} value= {mySearch}/>
      </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
        </button>
      </div>
      
      {myRecipes.map ((element, index) => (
        <MyRecipesComponents key={index}
        label={element.recipe.label}
        dietLabels={element.recipe.dietLabels} 
        calories={element.recipe.calories}
        image={element.recipe.image} 
        totalWeight={element.recipe.totalWeight}
        ingredients={element.recipe.ingredientLines}/>
      ))}


    </div>
);
}

export default App;
