import React, { Component } from 'react'
import Navigation from '../components/Navigation'

let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'

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
                cocktails: data
            })
        })
    }

  

    render() {
        return (
            <div>
                <Navigation/>
                <h1>Cocktail list</h1>
            </div>
        )
    }
}
