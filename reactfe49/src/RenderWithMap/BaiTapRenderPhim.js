import React, { Component } from 'react'
import data from './DataFilms.json';
import './BaiTapRender.css'
export default class BaiTapRenderPhim extends Component {

    renderFilms = () => {
        return data.map((film, index) => {
            return <div className="col-2 mb-5" key={index}>
                <div className="card text-left ml-3" style={{ width: 250 }}>
                    <img className="card-img-top" src={film.hinhAnh} style={{ height: 300 }} alt={film.hinhAnh} />
                    <div className="card-body bg-dark text-white">
                        <h4 className="card-title" style={{ height: 50 }}>{film.tenPhim.length > 20 ? <span> {film.tenPhim.substr(0, 20)} ... </span> : <span>{film.tenPhim}</span>}</h4>
                        <p className="card-text" style={{ height: 75 }}>{film.moTa.length > 75 ? <span>{film.moTa.substr(0, 75)} ... </span>: film.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div style={{ backgroundImage: 'url("./img/avenger.jpg")', backgroundSize: '100%', width: '100%', minHeight: 1000 }}>
                <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'rgba(122,212,98,.5)' }}>
                    <a className="navbar-brand" href="#">CYBERSOFT</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="container-fluid" style={{ width: '100%', minHeight: 1000, backgroundColor: 'rgba(0,0,0,.5)' }}>

                    <h3 className="mt-2 mb-2 text-center display-4 text-light" >Danh sách phim</h3>

                    <div className="row">
                        {this.renderFilms()}
                    </div>

                </div>
            </div>
        )
    }
}
