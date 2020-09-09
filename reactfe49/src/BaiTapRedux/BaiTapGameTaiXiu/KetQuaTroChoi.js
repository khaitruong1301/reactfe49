import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        const { banChon, soBanThang, tongSoBanChoi } = this.props;
        // console.log(this.props.banChonCom)


        return (
            <div>
                <div className="display-4 text-center">
                    Tổng điểm: <span className="text-danger">
                        {this.props.mangXucXac.reduce((tongDiem, xxnn, index) => {
                            return tongDiem += xxnn.ma;
                        }, 0)}
                    </span>
                </div>


                <div className="display-4 text-center">
                    BẠN CHỌN: <span className="text-danger">
                        {banChon ? 'TÀI' : 'XỈU'}

                    </span>
                </div>
                <div className="display-4 text-center">
                    SỐ BÀN THẮNG: <span className="text-success">{soBanThang}</span>
                </div>
                <div className="display-4 text-center">
                    TỔNG SỐ BÀN CHƠI: <span className="text-warning">{tongSoBanChoi}</span>
                </div>
                <div className="text-center mt-5">
                    <button onClick={() => {
                        this.props.playGame()
                    }} className="btn btn-success">PLAY GAME</button>
                </div>
            </div>
        )
    }
}
//Hàm lấy giá trị từ state redux về biển đổi thành props của component
const mapStateToProps = (state) => { //state là giá trị từ rootreducer truyền vào component
    return {
        banChon: state.stateGameXucXac.banChon,
        soBanThang: state.stateGameXucXac.soBanThang,
        tongSoBanChoi: state.stateGameXucXac.tongSoBanChoi,
        mangXucXac: state.stateGameXucXac.mangXucXac
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)