import style from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    return (
        <div className={style['cart']}>
            <p className={style['cart-title']}>Корзина</p>
            <div className={style['cart-form']}>
                {props.activeCart.map(el => (<CartItem key={el.id} id={el.id} item={el} amount={props.getAmount(el.id)} deleteItem={props.deleteItem} />))}
                <div className={style['cart-product']}></div>
                <div className={style['cart-amount']}></div>
                <div className={style['cart-total']}>
                    <p className={style['cart-sum']}>Сумма заказа: {props.getSum()} BYN</p>
                    <div className={style['order-button']} onClick={() => props.checkOut()}>
                        <p className={style['order-btn-text']}>Заказать</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;