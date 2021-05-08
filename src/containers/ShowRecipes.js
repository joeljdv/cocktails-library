import React, { Component } from 'react'


export default class ShowRecipes extends Component {

    render() {
        return (
            <div >
                <div className='recipes'>
                    <h3>{this.props.myDrink.name}</h3>
                    <img className='recipe-image' src={this.props.myDrink.image} /><br/>
                    <button id={this.props.myDrink.id} onClick={this.props.delete}>Delete</button> 
                </div>  
                <hr/>
            </div>  
        )
    }
}
