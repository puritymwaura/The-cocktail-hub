import React from 'react'

function DisplayContainer(props) {

  return (
    <div>
        <figure>
            <img src={props.image.drinkThumb} alt={props.image.drink}/>
            <figcaption>
                {props.image.glass}
            </figcaption>
        </figure>
    </div>
  )
}

export default DisplayContainer