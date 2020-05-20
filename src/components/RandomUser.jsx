/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';

export default class RandomUser extends Component {

    state ={
        loading: true,
        people: []
    };

    async componentDidMount(){
        const url = "https://api.randomuser.me/?results=5";
        const explore = await fetch(url);
        const data = await explore.json();
        this.setState({people: data.results, loading: false})
    }


    render(){

        if(this.state.loading){
            return (
            <div> loading...</div>
            );
        }
        if(!this.state.people.length){
            return (
            <div>No Person Found !!!</div>
            );
        }
        return(
            <div>
            {this.state.people.map(person => (
            <div key={person.login.uuid}>
            <div>{person.name.title}</div>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <img src={person.picture.large} />
            </div>
            ))}
            </div>
        );
    }
}