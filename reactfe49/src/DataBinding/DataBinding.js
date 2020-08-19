import React, { Component } from 'react'



export default class DataBinding extends Component {

    //Thuộc tính
    product = {
        id:1,
        name:'iphoneX',
        price:1000
    }

    //Phương thức
    renderCard = () => {
        return <div className="card text-left">
            <img className="card-img-top" src="http://picsum.photos/180/100" alt />
            <div className="card-body">
                <h4 className="card-title">{this.product.name}</h4>
                <p className="card-text">{this.product.price}</p>
            </div>
        </div>
    }

    render() {
        //Binding data
        let title = 'hello FrontEnd 49';
        let photo = 'http://picsum.photos/200/200';
        //Binding function 
        let renderImg = () => {
            return <img src="https://picsum.photos/100/100" />
        }
        return (
            <div>
                <h1 id="title">{title}</h1>
                <img src={photo} />
                <img src="./img/logo.jpg" />
                <div>
                    {renderImg()}
                </div>
                <div>
                    {this.renderCard()}
                </div>
                <div className="card text-left">
                    <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">  {this.product.name}</h4>
                        <p className="card-text">  {this.product.price}</p>
                    </div>
                </div>             
            </div>
        )
    }
}
