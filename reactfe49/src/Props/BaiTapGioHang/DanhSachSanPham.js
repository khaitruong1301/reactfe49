import React, { Component } from 'react'
import SanPhamGH from './SanPhamGH'
export default class DanhSachSanPham extends Component {


    renderSanPham = () => {
        return this.props.mangSanPham.map((sanPham, index) => {
            return <div key={index} className="col-4">
                <SanPhamGH themGioHang={this.props.themGioHang} sanPham={sanPham} />
            </div>
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderSanPham()}
                    {/*                   
                    <div className="col-4">
                        <SanPhamGH />
                    </div>
                    <div className="col-4">
                        <SanPhamGH />
                    </div> */}
                </div>
            </div>
        )
    }
}
