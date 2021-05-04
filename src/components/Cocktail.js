import React from 'react'
import Cocktails from '../containers/Cocktails'

const Cocktail = ({drinks}) => {
    return (
        <div>
           <li>{drinks.strDrink}</li>
        </div>
    )
}

export default Cocktail