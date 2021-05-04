import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const link = {
    width: '100px',
    padding:'12px',
    margin:'0 6px 6px',
    color: 'orange'
}

const Navigation = () => {
    return (
        <div>
            <NavLink to='/' exact style={link} activeStyle={{background: 'darkred'}}>
                Home
            </NavLink>
        </div>
    )
}

export default Navigation