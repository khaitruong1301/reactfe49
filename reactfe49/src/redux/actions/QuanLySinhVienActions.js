import {THEM_SINH_VIEN} from '../types/QuanLySinhVienTypes'




export const themSinhVienAction = (sinhVien) => {
    return {
        type:THEM_SINH_VIEN,
        sinhVien
    }
}