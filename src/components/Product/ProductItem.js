import React, { Component } from 'react';
import style from './Product.module.css';

export class ProductItem extends Component {

    render() {
        return (
            <div className={style['product-card']}>
                <img src={"/product-images/" + this.props.item.img} className={style['prd-img']}></img>
                <div className={style['prd-info']}>
                    <p className={style['prd-title']}>{this.props.item.title}</p>
                    <p className={style['prd-description']}>{this.props.item.desc}</p>
                    <div className={style['prd-buy']}>
                        <p className={style['prd-price']}>{this.props.item.price} BYN</p>
                        <div className={style['prd-cart']} onClick={() => this.props.onAdd(this.props.item)}></div>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default ProductItem;