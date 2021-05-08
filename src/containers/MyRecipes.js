import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import ShowRecipes from './ShowRecipes'

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

    handleDelete = (e) => {
        fetch(`http://localhost:3001/drinks/${e.target.id}`, {
            method: 'DELETE'
        })
        this.deleteRecipe(e)
    }

    deleteRecipe = (e) => {
        this.setState({
            myRecipes: this.state.myRecipes.filter(recipe => recipe.id != e.target.id)
        })
    }

    render() {

        let recipes = this.state.myRecipes.map(recipe => <ShowRecipes myDrink={recipe} key={recipe.id} delete={this.handleDelete} />)

        return (
            <div>
                <Navigation/>
                <h1>My recipes</h1>
                {recipes}
            </div>
        )
    }
}
