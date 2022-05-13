import React from 'react';
import './burgerMenu.scss';


export default function BurMenu({active, setActive}) {

    const scrollToFeatures = () => document.getElementById('features').scrollIntoView();
    const scrollToPrices = () => document.getElementById('prices').scrollIntoView();
    const scrollToContains = () => document.getElementById('contains').scrollIntoView();

    return(
        <section className={ active ? 'burger-menu active' : 'burger-menu'} >
            <div className='burger-link'  to="/products" onClick={() => setActive(!active) } >
                <a href='#features' onClick={scrollToFeatures}>преимущества</a>
            </div>
            <div className='burger-link'  to="/products" onClick={() => setActive(!active) } >
                <a href='#contains' onClick={scrollToContains}>комплектация</a>
            </div>
            <div className='burger-link'  to="/products" onClick={() => setActive(!active) } >
                <a href='#prices' onClick={scrollToPrices}>цены & примеры работ</a>
            </div>
            <div className='burger-link'  to="/products" onClick={() => setActive(!active) } >
                <a href="https://aluminservice.ru">aluminservice.ru - <span>наш основной сайт с другой продукцией</span></a>
            </div>
            </section>
    );
}