import React, { Component } from 'react'
import './Styling.scss';
import style from './Styling.module.scss';
export default class Child extends Component {
    render() {
        // let objectStyle = {borderColor:'red'}
        return (
            <div>
                <div className={`${style.content} `}>
                    <p className={`${style.text}`}>22222</p>
                    child component
                </div>
                <p className={`${style.text}`}>22222</p>
                
                <p style={{background:'orange',fontSize:'15px',border:'5px solid red'}}>
                    Hello cybersoft fe49
                </p>
            </div>
        )
    }
}
