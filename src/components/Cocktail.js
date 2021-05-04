import React from 'react'
import {Link} from 'react-router-dom'
const Cocktail = ({drinks}) => {
    return (
        <Link to={`cocktails/${drinks.idDrink}`}>
            <div>
                <li>{drinks.strDrink}</li>
            </div>
        </Link>
    )       
}

export default Cocktail