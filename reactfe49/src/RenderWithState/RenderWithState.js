import React, { Component } from 'react'

export default class RenderWithState extends Component {

    //Quản lý những giá trị thay đổi trên giao diện
    state = {
        login: false
    }

    //Thuộc tính 
    // login = false;
    userName = 'Mẫn';

    renderLogin = () => {
        if (this.state.login) {
            return <p>
                Hello {this.userName}
            </p>
        }
        return <div>
            <button className="btn btn-success" onClick={() => {
                this.handleLogin();
            }}>Đăng nhập</button>
        </div>
    }

    handleLogin = () => {
        // this.state.login = true;//Không được gán state trực tiếp
        //Phương thức setState =>
        //  Làm thay đổi giá trị state
        //  Gọi lại hàm render chạy lại
        // setState là phương thức bất đồng bộ
        // let newState = { login: true };

        this.setState({
            login: true
        }, () => {
                console.log(this.state.login);
        });


    }

    render() {
        return (
            <div className="container">
                {/* {this.login ? <p>Hello {this.userName}</p> : <div><button className="btn btn-success">Đăng nhập</button></div>} */}
                {this.renderLogin()}
            </div>
        )
    }
}
