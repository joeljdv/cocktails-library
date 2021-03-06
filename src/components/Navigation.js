import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
    width: '100px',
    padding:'12px',
    margin:'0 6px 6px',
    color: 'bisque'
}

const Navigation = () => {
    return (
        <div>
            <NavLink to='/' exact style={link} activeStyle={{background: 'darkred'}}>
                Home
            </NavLink>
            <NavLink to='/cocktails' exact style={link} activeStyle={{background: 'darkred'}}>
                Cocktails
            </NavLink>
            <NavLink to='/myrecipes' exact style={link} activeStyle={{background: 'darkred'}}>
                My recipes
            </NavLink>
        </div>
    )
}

export default Navigation