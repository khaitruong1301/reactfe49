import { THEM_SINH_VIEN, CHINH_SUA_SINH_VIEN, CAP_NHAT_SINH_VIEN } from '../types/QuanLySinhVienTypes'




export const themSinhVienAction = (sinhVien) => {
    return {
        type: THEM_SINH_VIEN,
        sinhVien
    }
}

// export const actionName = (payload) => ({
//     type: type,
//     payload
// })


export const chinhSuaSinhVienAction = (sinhVien) => (
    {
        type: CHINH_SUA_SINH_VIEN,
        sinhVien
    }
)

//{ return noiDung } => (noidung)



export const capNhatsinhVienAction = (sinhVienCapNhat) => ({
    type: CAP_NHAT_SINH_VIEN,
    sinhVienCapNhat
})
