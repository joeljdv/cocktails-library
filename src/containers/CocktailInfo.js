import React, { Component } from 'react'

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
                drink:data.drinks
            })
        })
    }

    render() {
        return (
            <div>
                this is cocktail info
            </div>
        )
    }
}
