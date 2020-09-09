import React, { Component } from 'react'
import XucXac from './XucXac';
import KetQuaTroChoi from './KetQuaTroChoi';
import './styleGame/styleGame.css';

export default class BaiTapGameTaiXiu extends Component {

    render() {
        return (
            <div className="gameXucXac">
                <h3 className="text-center display-4 text-dark">BÀI TẬP GAME XÚC XẮC</h3>
                <XucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}


