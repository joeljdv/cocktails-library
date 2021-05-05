import React, { Component } from 'react'

export default class DrinkInfo extends Component {

    render() {
        const x = Object.keys(this.props.drink).filter(k => k.includes('Ingredient')).filter(i => this.props.drink[i] !== '' && this.props.drink[i] !== null)
        const y = x.map(i => this.props.drink[i])
        return (
            <div className='drink'>
                <h2>{this.props.drink.strDrink}</h2>
                <img src={this.props.drink.strDrinkThumb} className='drink-image'/> 
                <br/>
                <button>Add Favorite</button>
                <ul className='ingredients'><strong>Ingredients:</strong>
                    {y.map(i => <li>{i}</li>)}
                </ul>
                <p className='instructions'><strong>Instructions: </strong>{this.props.drink.strInstructions}</p>
            </div>
        )
    }
}
