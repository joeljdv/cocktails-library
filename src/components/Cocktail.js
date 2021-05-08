import React from 'react'
import {NavLink} from 'react-router-dom'
const Cocktail = ({drinks}) => {
    return (
        <NavLink to={`cocktails/${drinks.idDrink}`} exact style={{color:'bisque'}}>
            <div>
                <li>{drinks.strDrink}</li>
            </div>
        </NavLink>
    )       
}

export default Cocktail