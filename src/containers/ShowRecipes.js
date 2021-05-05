import React from 'react'

const ShowRecipes = (props) => {
    return (
        <div className='recipes'>
            <h3>{props.myDrink.name}</h3>
            <img className='recipe-image' src={props.myDrink.image} /><br/>
            <button id={props.myDrink.id} onClick={props.delete}>Delete</button>
            <hr/>
        </div>
    )
}

export default ShowRecipes