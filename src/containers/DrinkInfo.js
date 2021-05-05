import React, { Component } from 'react'

export default class DrinkInfo extends Component {

    render() {
        const x = Object.keys(this.props.drink).filter(k => k.includes('Ingredient')).filter(i => this.props.drink[i] !== '' && this.props.drink[i] !== null)
        const y = x.map(i => this.props.drink[i])
        let measureKey = Object.keys(this.props.drink).filter(k => k.includes('Measure')).filter(i => this.props.drink[i] !== '' && this.props.drink[i] !== null)
        let measuresValue = measureKey.map(m => this.props.drink[m])
        return (
            <div className='drink-info'>
                <div className='drink'>
                    <h2>{this.props.drink.strDrink}</h2>
                    <img src={this.props.drink.strDrinkThumb} className='drink-image'/> 
                    <br/>
                    <button>Add Favorite</button> 
                </div>
                <br/>
                <div className='drink-inst'> 
                   <div className='list'> 
                        <ul className='ingredients'>
                            <strong>Ingredient:</strong>
                            {y.map(i => <li>{i}</li>)}
                        </ul>
                    </div>          
                    <div className='list'>
                        <ul className='measures'>
                            <strong>Measures</strong>
                            {measuresValue.map(m => <li>{m}</li>)}
                        </ul>    
                        <p className='instructions'><strong>Instructions: </strong>{this.props.drink.strInstructions}</p>
                    </div>                     
                </div>  
                
            </div>
        )
    }
}
