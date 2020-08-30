import React, { Component } from 'react'

export default class SanPhamGH extends Component {
    render() {

        let {sanPham,themGioHang} = this.props;

        return (
            <div className="card">
                <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=>{
                        themGioHang(sanPham)
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
