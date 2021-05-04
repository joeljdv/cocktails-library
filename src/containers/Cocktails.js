import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import Cocktail from '../components/Cocktail'

let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'

export default class Cocktails extends Component {

    state={
        cocktails:[]
    }

    componentDidMount(){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                cocktails: data.drinks
            })
        })
    }

    render() {
        let drinks = this.state.cocktails.map(drink => <Cocktail key={drink.idDrink} drinks={drink} />)

        return (
            <div>
                <Navigation/>
                <h1>Cocktail list</h1>
                <hr/>
                {drinks}
            </div>
        )
    }
}
