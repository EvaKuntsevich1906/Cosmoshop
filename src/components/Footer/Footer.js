import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style['footer']}>
            <p className={style['copyright']}>Все права защищены (C) Eva Kuntsevich 2022</p>
        </footer>
    )
}

export default Footer;