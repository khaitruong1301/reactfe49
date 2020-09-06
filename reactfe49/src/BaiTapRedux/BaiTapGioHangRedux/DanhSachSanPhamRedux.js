import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

export default class DanhSachSanPhamRedux extends Component {
    
    renderSanPham = () => {
        //Nhận props mangSanPham từ component cha render ra giao diện
        return this.props.mangSanPham.map((sanPham,index)=>{
            return <div className="col-4" key={index}>
                <SanPhamRedux sanPham={sanPham} />
            </div>
        })
    }
    
    
    render() {
        return (
            <div>
                <h3 className="text-center display-4">Bài tập giỏ hàng redux</h3>

                <div className="row">
                    {this.renderSanPham()}
                </div>

            </div>
        )
    }
}
