import { THEM_SINH_VIEN } from "./types/QuanLySinhVienTypes";

const initialState = {
    mangSinhVien: [
        {maSinhVien:1,tenSinhVien:'Nguyễn văn A',soDienThoai:1231231,email:'nguyenvana@gmail.com'},
        {maSinhVien:2,tenSinhVien:'Nguyễn văn B',soDienThoai:1231231,email:'nguyenvanb@gmail.com'},
    ]
}

export const QuanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {

    case THEM_SINH_VIEN: {
        state.mangSinhVien = [...state.mangSinhVien,action.sinhVien];
        return {...state}
    }

    default:
        return {...state}
    }
}
