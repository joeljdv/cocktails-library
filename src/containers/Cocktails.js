import React, { Component } from 'react'


let URL = 'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
export default class Cocktails extends Component {

    state={
        cocktails:[]
    }

    componentDidMount() {
        fetch(URL) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
