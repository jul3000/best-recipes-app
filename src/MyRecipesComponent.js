function MyRecipesComponents({label, dietLabels, calories, image, totalWeight, ingredients}) {
    return (<div className="container-recipes">
        <h2>{label}</h2>
        <h3>Diet: {dietLabels}</h3>
        <p>{calories.toFixed()} calories</p>
        <img src={image} alt="dish"/>
        <p>Quantity: {totalWeight.toFixed()} g</p>
        <ul>
            {ingredients.map ((ingredient, index) => (
                <li key={index}>
                    <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" width="30px" alt="icon"/> {ingredient}
                </li>
            ))}
        </ul>
    </div>)
}

export default MyRecipesComponents;