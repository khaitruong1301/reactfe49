import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    
    producList = [
        {id:1,name:'Iphone X',price:1000},
        {id:2,name:'Samsung Note 10plus',price:3000},
        {id:3,name:'Htc m10',price:2000},
    ]
    
    renderTable = () => {
        return this.producList.map((item,index)=> {
            return <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <button className="text-danger">Xóa</button>    
                </td>
            </tr>
        })
    }
    
    renderProduct = () =>{
        
        return this.producList.map((product,index)=>{
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src="https://picsum.photos/200/200" alt={product.name} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        })

     
    }
    render() {
        return (
            <div className="container">
                {/* <div className="row">
                    {this.renderProduct()}
                </div> */}
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderTable()
                        }
                    </tbody>
                </table>
            </div> 
            )
    }
}
