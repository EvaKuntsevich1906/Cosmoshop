import React from 'react';
import style from './CatalogPage.module.css';
import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';

class CatalogPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: "1",
                    img: "product-1.png",
                    title: "Slimming Gel Body",
                    desc: "Крем ночной",
                    price: 69.5,
                },
                {
                    id: "2",
                    img: "product-2.png",
                    title: "Slimm Gel ",
                    desc: "Крем дневной",
                    price: 49,

                },
                {
                    id: "3",
                    img: "product-3.png",
                    title: "Slimming Gel ",
                    desc: "Масло для тела суперуход",
                    price: 39,

                },
                {
                    id: "4",
                    img: "product-4.png",
                    title: "Gel ",
                    desc: "Гель для душа",
                    price: 29.5,

                },
                {
                    id: "5",
                    img: "product-5.png",
                    title: "Slimming Gel ",
                    desc: "Лосьон для тела",
                    price: 18.5,
                },
                {
                    id: "6",
                    img: "product-6.png",
                    title: "Slimming Gel ",
                    desc: "Лосьон для тела для похудения",
                    price: 24.5,
                },
                {
                    id: "7",
                    img: "product-7.png",
                    title: "Oil",
                    desc: "Масло для лица",
                    price: 19.5,
                },
                {
                    id: "8",
                    img: "product-8.png",
                    title: "Пенка",
                    desc: "Пенка для умывания",
                    price: 18.5,
                },
                {
                    id: "9",
                    img: "product-9.png",
                    title: "Сыворотка ",
                    desc: "Сыворотка для лица для домашнего ухода",
                    price: 22.5,
                }
            ],
            activeCart: {}
        }
        this.addToCart = this.addToCart.bind(this)
        this.getAmount = this.getAmount.bind(this)
        this.getSum = this.getSum.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.checkOut = this.checkOut.bind(this)
    }

    render() {
        return (
            <div className={style['catalog-page']}>
                <Header />
                <div className={style['main']}>
                    <Product items={this.state.items} onAdd={this.addToCart} />
                    <Cart activeCart={this.getCards()} getAmount={this.getAmount} getSum={this.getSum} deleteItem={this.deleteItem} checkOut={this.checkOut} />
                </div>
                <Footer />
            </div>
        );
    }

    addToCart(item) {
        this.setState((previousState) => {

            const isItemInCart = previousState.activeCart.hasOwnProperty(item.id);
            const incrementedAmount = isItemInCart ? previousState.activeCart[item.id].amount + 1 : 1;

            return {
                ...previousState,
                activeCart: {
                    ...previousState.activeCart,
                    [item.id]: { amount: incrementedAmount }
                }
            };
        });
    };

    getCards() {
        return this.state.items.filter(item => this.state.activeCart.hasOwnProperty(item.id))
    }

    getAmount(id) {
        return this.state.activeCart[id].amount;
    }

    getSum() {
        return this.getCards().reduce((accum, current) => {
            return accum + current.price * this.getAmount(current.id)
        }, 0);
    }

    deleteItem(item) {
        this.setState((previousState) => {
            const isManyItemsInCart = previousState.activeCart[item.id].amount > 1;
            const newItemAmount = previousState.activeCart[item.id].amount - 1;

            const newState = {
                ...previousState,
                activeCart: {
                    ...previousState.activeCart,
                    [item.id]: { amount: newItemAmount }
                }
            };

            if (!isManyItemsInCart) {
                delete newState.activeCart[item.id]
            }

            return newState
        });
    }

    checkOut() {
        this.setState((previousState) => {
            const newState = {
                ...previousState,
                activeCart: {}
            };
            alert(`Благодарим за заказ!`)
            return newState;
        });
    }
}

export default CatalogPage;