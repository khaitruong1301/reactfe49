import React, { Component } from 'react'
import {connect} from 'react-redux'

class XucXac extends Component {
    renderXucXac = () => {
        //Lấy mảng xúc xắc từ redux về binding ra giao diện
        const {mangXucXac} = this.props;
        return mangXucXac.map((xucXac,index)=>{
            return   <img key={index} className="ml-5" style={{width:50}} src={xucXac.hinhAnh} alt={xucXac.hinhAnh} />
        })
    }
    render() {
        let {banChon} = this.props;
        return (
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-3">
                        <button onClick={()=>{
                              this.props.datCuocTaiXiu(true)
                        }} style={{fontSize:50,border:banChon?'5px solid yellow':'none'}} className="btn display-4 text-white bg-primary p-5 ml-5">TÀI</button>
                    </div>
                    <div className="col-6 text-center">
                        {this.renderXucXac()}
                        {/* <img className="ml-5" style={{width:50}} src="./img/game_xuc_xac/1.png" />
                        <img className="ml-5" style={{width:50}} src="./img/game_xuc_xac/1.png" />
                        <img className="ml-5" style={{width:50}} src="./img/game_xuc_xac/1.png" /> */}
                    </div>
                    <div className="col-3">
                    <button onClick={()=>{
                        this.props.datCuocTaiXiu(false)
                    }} style={{fontSize:50,border:!banChon?'5px solid yellow':'none'}} className="btn display-4 text-white bg-primary p-5 ml-5">XỈU</button>
                    </div>
                </div>
            </div>
        )
    }
}

//Lấy dữ liệu từ redux về
const mapStateToProps = (state) => {
    return {
        mangXucXac:state.stateGameXucXac.mangXucXac,
        banChon:state.stateGameXucXac.banChon
    }
}

//Tạo ra props đưa dữ liệu lên redux store
const mapDispatchToProps = (dispatch) => {
    return {
        datCuocTaiXiu: (ketQuaChon) => {
            console.log('ketQuaChon',ketQuaChon);
            const action = {
                type:'DAT_CUOC_TAI_XIU', //Phải khác tên đối với các type nghiệp vụ khác
                ketQuaChon
            }
            //Đưa action lên tất cả reducer
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(XucXac)
