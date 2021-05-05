import React, { Component } from 'react'
import DrinkInfo from '../containers/DrinkInfo'
import Navigation from '../components/Navigation'

export default class CocktailInfo extends Component {
    state={
        drink:[]
    }
    componentDidMount() {
        let id= this.props.match.params.id
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks)
            this.setState({
                drink:data.drinks,
            })
        })
    }

   

    render() {

        const drink = this.state.drink.map(dr => <DrinkInfo drink={this.state.drink} key={dr.idDrink} drink={dr}/>)

        return (
            <div>
                <Navigation/>
                this is cocktail info
                {drink}
            </div>
        )
    }
}
