import React, { Component } from 'react'

export default class HandleEvent extends Component {


    handleClick = () => {

        alert('hello');
    }

    showInfo = (name) => {
        alert(`name ${name}`)
    }

    render() {



        return (
            <div className="container">
                {/*Cách 1: Truyền callback function thông qua thuộc tính  */}
                <button onClick={this.handleClick}>Click me</button>
                <br />
                <button onClick={this.showInfo.bind(this,'Mẫn đẹp trai')}>showinfo</button>
                <br />
                {/*Cách 2: Dùng arrow function */}
                <button onClick={() => {
                    alert('hahaha');
                    //Click vào gọi nhiều hàm thực hiện ...
                    this.handleClick();
                }}>show Message</button>
                <br /> <br />
                <button onClick={() => {
                    this.showInfo('Mẫn đẹp trai!')
                }}>show info</button>

            </div>
        )
    }
}
