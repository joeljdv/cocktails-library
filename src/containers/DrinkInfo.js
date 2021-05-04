import React, { Component } from 'react'

export default class DrinkInfo extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.drink.strDrink}</h2>
                <img src={this.props.drink.strDrinkThumb}/> 
                <br/>
                <button>Add Favorite</button>
                <ul>{this.props.drink.strIngredient4}</ul>
            </div>
        )
    }
}
