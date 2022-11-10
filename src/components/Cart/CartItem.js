import React, { Component } from 'react';
import style from './Cart.module.css';

class CartItem extends Component {

    render() {

        return (
            <div className={style['product-card']}>
                <img src={"/product-images/" + this.props.item.img} className={style['prd-img']}></img>
                <div className={style['prd-info']}>
                    <p className={style['prd-title']}>{this.props.item.title}</p>
                    <div className={style['prd-buy']}>
                        <p className={style['prd-price']}>{this.props.item.price} BYN</p>
                        <p className={style['prd-price']}> Количество: {this.props.amount}</p>
                        <div className={style['del-btn']} onClick={() => this.props.deleteItem(this.props.item)}>Удалить</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CartItem;