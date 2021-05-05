import React from 'react'

const ShowRecipes = ({myDrink}) => {
    return (
        <div className='recipes'>
            <h3>{myDrink.name}</h3>
            <img className='recipe-image' src={myDrink.image} /><br/>
            <button>Delete</button>
            <hr/>
        </div>
    )
}

export default ShowRecipes