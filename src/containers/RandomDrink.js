import React, { Component } from 'react'
import DrinkInfo from './DrinkInfo'

export default class RandomDrink extends Component {
    state = {
        random:[]
    }

    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            this.setState({
                random:data.drinks
            })
        })
    }

    render() {
        let randomDrink = this.state.random.map(drink => <DrinkInfo key={drink.idDrink} drink={drink}/>)

        return (
            <div>
                {randomDrink}
            </div>
        )
    }
}
