import { CAP_NHAT_SINH_VIEN, CHINH_SUA_SINH_VIEN, THEM_SINH_VIEN } from "./types/QuanLySinhVienTypes";

const initialState = {
    mangSinhVien: [
        { maSinhVien: 1, tenSinhVien: 'Nguyễn văn A', soDienThoai: 1231231, email: 'nguyenvana@gmail.com' },
        { maSinhVien: 2, tenSinhVien: 'Nguyễn văn B', soDienThoai: 1231231, email: 'nguyenvanb@gmail.com' },
    ],
    sinhVienSua: { //state thông tin sinh viên trên ô input
        maSinhVien: '',
        tenSinhVien: '',
        soDienThoai: '',
        email: ''
    },
    sinhVienValue : {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }

    }
}

export const QuanLySinhVienReducer = (state = initialState, action) => {
    switch (action.type) {

        case THEM_SINH_VIEN: {
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return { ...state }
        }
        case CHINH_SUA_SINH_VIEN: {
            //Thay đổi state.sinhVienSua = sinhVien khi người dùng click chỉnh sửa
            state.sinhVienSua = action.sinhVien;

            return {...state};
        }

        case CAP_NHAT_SINH_VIEN: {

            let mangSinhVienCapNhat = [...state.mangSinhVien];
            //Tìm sinh viên cập nhật sau khi người dùng chỉnh sửa trong mảng dựa vào mã
            let index = mangSinhVienCapNhat.findIndex(sv=>sv.maSinhVien===action.sinhVienCapNhat.maSinhVien);
            if(index !== -1) {
                //Gán lại sinhVien trong mảng có mã = sinh viên cập nhật
                mangSinhVienCapNhat[index] = {...action.sinhVienCapNhat};
            }
            //Cập nhật lại state.mangSinhVien
            state.mangSinhVien = mangSinhVienCapNhat;
            //Trả về state mới
            return {...state};
            
        }
        default:
            return { ...state }
    }
}
