import React, { Component } from 'react'
import Child from './Child'

export default class Styling extends Component {
    render() {
        return (
            <div>
                <h1 className="title">hello fe 49</h1>
                <div className="content">
                    abc
                </div>
                <Child />
            </div>
        )
    }
}
