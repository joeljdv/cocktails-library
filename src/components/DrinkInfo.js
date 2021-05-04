import React from 'react'

const DrinkInfo = ({drink}) => {
    return (
        <div>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb}/> 
        </div>
    )
}


export default DrinkInfo