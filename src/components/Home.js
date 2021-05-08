import React from 'react'
import Navigation from './Navigation'
import RandomDrink from '../containers/RandomDrink'

const Home = () => {
    return (
        <div className='Home'>
            <Navigation/>
            <h1>Welcome to the cocktail Library</h1>
            <RandomDrink/>
        </div>
    )
}

export default Home
