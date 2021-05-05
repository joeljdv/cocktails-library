import React, { Component } from 'react'
import Navigation from '../components/Navigation'

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
        return (
            <div>
                <Navigation/>
            </div>
        )
    }
}
