import React from 'react';
import './burger.scss';


export default function Burger( {active, setActive} ) {

    return(
        <section className='burger' active={active} onClick={() => setActive(!active)}>

            <div className='burger-btn'>
                <div className={ active ? 'empty-line active' : 'first-line'}/>
                <div className={ active ? 'first-line active' : 'first-line'}/>
                <div className={ active ? 'second-line active' : 'second-line'}/>
            </div>

        </section>
    );
}