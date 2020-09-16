import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import { connect } from 'react-redux'
import { chinhSuaSinhVienAction } from '../redux/actions/QuanLySinhVienActions'
class DanhSachSinhVien extends Component {
    render() {
        return (
            <div>
                <FormSinhVien />
                <div className="container-fluid">
                    <table className="table">
                        <thead className=" bg-dark text-white">
                            <tr>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>email</th>
                                <th>Số điện thoại</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.mangSinhVien.map((sinhVien, index) => {
                                    return <tr key={index}>
                                        <td>{sinhVien.maSinhVien}</td>

                                        <td>{sinhVien.tenSinhVien}</td>

                                        <td>{sinhVien.soDienThoai}</td>

                                        <td>{sinhVien.email}</td>
                                        <td>
                                            <button className="btn btn-primary mr-2" onClick={() => {
                                                //dispatch thông tin sinh viên cập nhật lại state.sinhVienSua trên redux
                                                let action = chinhSuaSinhVienAction(sinhVien);
                                                //Đưa dữ liệu lên reducer
                                                
                                                this.props.dispatch(action);

                                            }}>Chỉnh sửa</button>
                                            <button className="btn btn-danger">Xóa</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
})



export default connect(mapStateToProps)(DanhSachSinhVien)