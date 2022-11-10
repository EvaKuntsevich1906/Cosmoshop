import style from './Product.module.css';
import ProductItem from './ProductItem';
import React, { Component } from 'react';

export class Product extends Component {

    render() {

        return (
            <div className={style['catalog']}>
                <p className={style['news']}>Новинки</p>
                <div className={style['catalog-grid']}>
                    {this.props.items.map(el => (<ProductItem key={el.id} item={el} onAdd={this.props.onAdd} />))}
                </div>
            </div>
        )
    }

}
export default Product;