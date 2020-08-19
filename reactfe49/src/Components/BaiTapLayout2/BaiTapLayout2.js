import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import SliderComponent from './SliderComponent'
import ProductListComponent from './ProductListComponent'
import FooterComponent from './FooterComponent'

export default class BaiTapLayout2 extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <SliderComponent />
                <ProductListComponent />
                <FooterComponent />
            </div>
        )
    }
}
