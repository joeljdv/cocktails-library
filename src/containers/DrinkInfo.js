import React, { Component } from 'react'
   
export default class DrinkInfo extends Component {

    state = {
        name: this.props.drink.strDrink,
        image: this.props.drink.strDrinkThumb,
        ingredients:[],
        measures:[]
    }

    componentDidMount(){
        const x = Object.keys(this.props.drink).filter(k => k.includes('Ingredient')).filter(i => this.props.drink[i] !== '' && this.props.drink[i] !== null)
        const y = x.map(i => this.props.drink[i])
        let measureKey = Object.keys(this.props.drink).filter(k => k.includes('Measure')).filter(i => this.props.drink[i] !== '' && this.props.drink[i] !== null)
        let measuresValue = measureKey.map(m => this.props.drink[m])
        this.setState({
            ingredients:y,
            measures: measuresValue
        })
    }

    handleClick = (e) => {
        fetch('http://localhost:3001/drinks', {
            method: 'POST',
            body: JSON.stringify({
                id:'',
                name: this.state.name,
                image: this.state.image,
                ingredients: this.state.ingredients,
                measures: this.state.measures
            }),
            headers: {
               'Content-type':"application/json",
               "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    render() { 
      
        
        return (
            <div className='drink-info'>
                <div className='drink'>
                    <h2>{this.props.drink.strDrink}</h2>
                    <img src={this.props.drink.strDrinkThumb} className='drink-image'/> 
                    <br/>
                    <button onClick={this.handleClick}>Add Favorite</button> 
                </div>
                <div className='drink-inst'> 
                   <div className='list'> 
                        <ul className='ingredients'>
                            <strong>Ingredient:</strong>
                            {this.state.ingredients.map(i => <li>{i}</li>)}
                        </ul>
                    </div>          
                    <div className='list'>
                        <ul className='measures'>
                            <strong>Measures</strong>
                            {this.state.measures.map(m => <li>{m}</li>)}
                        </ul>      
                    </div>
                      <p className='instructions'><strong>Instructions: </strong>{this.props.drink.strInstructions}</p>      
                </div>  
                             
            </div>
        )
    }
}
