import './App.scss';
import logo from "./images/logo.jpg";
import smallLogo from "./images/smallFav.jpg";
import Video from "./components/video/Video";
import Features from "./components/features/Features";
import Contains from "./components/contains/Contains";
import Prices from "./components/prices/Prices";
import HowToWork from "./components/howToWork/HowToWork";
import Contact from "./components/contact/Contact";
import phone from './assets/phone.svg';
import map from './assets/map.svg';
import Layout from "./components/layout/Layout";
import FormCallback from "./components/formCallback/FormCallback";
import {useContext, useEffect, useState} from "react";
import StoreContext from "./components/context";
import Burger from "./components/burgerMenu/Burger";
import BurMenu from "./components/burgerMenu/BurgerMenu";

function App() {
    const [callback, setCallback] = useState(false);
    const generalStore = useContext(StoreContext);
    const [menuActive, setMenuActive] = useState(false);

    const counterClasses = ["formCallback"];
    if (callback) {
        counterClasses.push("active")
    }
    useEffect(() => {
        setCallback(callback);
    }, [callback])

    const scrollToFeatures = () => document.getElementById('features').scrollIntoView();
    const scrollToPrices = () => document.getElementById('prices').scrollIntoView();
    const scrollToContains = () => document.getElementById('contains').scrollIntoView();

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <Burger active={menuActive} setActive={setMenuActive}/>
                    <BurMenu active={menuActive} setActive={setMenuActive}/>
                    <img src={logo} alt="logo"/>
                    <div className="smallLogo2">
                        <img src={smallLogo} alt="smallLogo"/>
                        <h3>Алюминь-сервис</h3>
                    </div>

                    <nav className="menu">
                        <a href='#features' onClick={scrollToFeatures}>преимущества</a>
                        <a href='#contains' onClick={scrollToContains}>комплектация</a>
                        <a href='#prices' onClick={scrollToPrices}>цены & примеры работ</a>
                    </nav>
                    <div className="contacts">
                        <div className="phoneAddress">
                            <div className="phone">
                                <div className="phoneIcon">
                                    <img src={phone}/>
                                    <a href="tel:+79081428392">+7 (908) 142-83-92</a>
                                </div>
                                <div className="phoneIcon">
                                    <img src={phone}/>
                                    <a href="tel:+74732287672">+7 (473) 228-76-72</a>
                                </div>
                            </div>
                            <div className="address">
                                <img src={map}/>
                                <span>г.Воронеж, Московский пр-т, 11И, оф. 18</span>
                            </div>
                        </div>

                        <button onClick={() => {
                            setCallback(true);
                            generalStore.setLayout(true);
                        }}>ОБРАТНЫЙ ЗВОНОК
                        </button>
                    </div>
                </div>
                <div className="smallLogo">
                    <div className="logo">
                    <img src={smallLogo} alt="smallLogo"/>
                    <h3>Алюминь-сервис</h3>
                    </div>
                    <button onClick={() => {
                        setCallback(true);
                        generalStore.setLayout(true);
                    }}>ОБРАТНЫЙ ЗВОНОК
                    </button>
                </div>
            </header>

            <Layout/>
            <Video/>
            <Features/>
            <Contains/>
            <Prices/>
            <HowToWork/>
            {callback &&
                <div className={counterClasses.join(" ")}>
                    <div className="exit"
                         onClick={() => {
                             setCallback(false);
                             generalStore.setLayout(false);
                         }}>x</div>
                    <FormCallback/>
                </div>}
            <Contact/>

        </div>
    );
}

export default App;
