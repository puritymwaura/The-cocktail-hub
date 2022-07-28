import React from 'react'

function DisplayContainer(props) {
  const ingredients = props.cocktail.ingredients.join(',');
 
  
  return (
    <div className='card'>
        <figure>
            <img src={props?.cocktail?.drinkThumb} alt={props?.cocktail?.drink}/>
            <figcaption>
                {props?.cocktails?.glass}
            </figcaption>
        </figure>
        <div>
          <p>{props?.cocktail?.drink}</p>
          <h3>Ingredients</h3>
          <p>{!ingredients ? 'Loading...' : ingredients}</p>
        </div>
        <div>
          <h3>Instructions</h3>
          <p>{props?.cocktail?.instructions}</p>
        </div>
    </div>
  )
}

export default DisplayContainer