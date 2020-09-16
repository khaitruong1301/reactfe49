import React, { Component, PureComponent } from 'react'

export default class Header extends PureComponent {


    render() {

        console.log('header render');
        return (
            <div>
                <h1>Header render Number : {this.props.sinhVien.name}</h1>
                {/* Nav tabs */}
                <ul className="nav nav-tabs" id="navId">
                    <li className="nav-item">
                        <a href="#tab1Id" className="nav-link active">Active</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#tab2Id">Action</a>
                            <a className="dropdown-item" href="#tab3Id">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#tab4Id">Action</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#tab5Id" className="nav-link">Another link</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab1Id" role="tabpanel" />
                    <div className="tab-pane fade" id="tab2Id" role="tabpanel" />
                    <div className="tab-pane fade" id="tab3Id" role="tabpanel" />
                    <div className="tab-pane fade" id="tab4Id" role="tabpanel" />
                    <div className="tab-pane fade" id="tab5Id" role="tabpanel" />
                </div>
            </div>

        )
    }

    componentWillUnmount(){
        //Chạy trước khi component mất khỏi giao diện
        console.log('componentWillUnmount header')
    }
}
