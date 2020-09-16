import React, { Component } from 'react'

export default class ChildComponent extends Component {

    constructor(props) {
        super(props);
        console.log('contructor child');
        this.state = {

        }
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child');

        return currentState;
    }

    shouldComponentUpdate(newProps,newState) {

        return true;
    }

    render() {
        console.log('renderChild')
        return (
            <div>
                child Component
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount child')
    }


    componentDidUpdate(propCu,StateCu){
        console.log('componentDidUpdate child');
    }
}
