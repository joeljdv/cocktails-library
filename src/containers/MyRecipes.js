import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import ShowRecipes from '../components/ShowRecipes'

export default class MyRecipes extends Component {

    state = {
        myRecipes:[]
    }

    componentDidMount() {
        fetch('http://localhost:3001/drinks')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                myRecipes:data
            })
        })
    }

    render() {

        let recipes = this.state.myRecipes.map(recipe => <ShowRecipes myDrink={recipe} key={recipe.id}/>)

        return (
            <div>
                <Navigation/>
                {recipes}
            </div>
        )
    }
}
