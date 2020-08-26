import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {

    sinhVien = {
        hoTen: 'Nguyễn Văn Tèo',
        hinhAnh: `https://api.adorable.io/avatars/152/teo`,
        lop:'FE 49'
    }


    render() {
        return (
            <div className="container">
                <ThongTinSinhVien sinhVien={this.sinhVien} />

            </div>
        )
    }
}
