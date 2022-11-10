import style from './LandingPage.module.css';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const LandingPage = () => {
    return (
        <div className={style['landing-page']}>
            <Header />
            <div className={style['main']}>
                <Banner />
            </div>
                <Footer />
        </div>
    );
};

export default LandingPage;