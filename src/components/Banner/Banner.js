import style from './Banner.module.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    const startFunc = () => {
        navigate("/catalog")
    }
    return (
        <div className={style['banner']}>
            <div className={style['banner-info']}>
                <h1 className={style['logo']}>SKINDOM</h1>
                <p className={style['sales-txt']}>Скидки до 50% с 5 по 15 ноября</p>
                <div className={style['catalog-btn']} onClick={startFunc}><p >Перейти в каталог</p></div>
            </div>
        </div>
    )
}

export default Banner;