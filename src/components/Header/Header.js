import style from './Header.module.css';

const Header = () => {
    return (
        <header>
            <p className={style['logo']}>SKINDOM</p>
            <p className={style['phone']}>+375(29)106-39-86</p>
        </header>
    )
}

export default Header;