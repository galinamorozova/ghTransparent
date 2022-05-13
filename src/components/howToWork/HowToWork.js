import './howToWork.scss';
import arrow from './../../assets/arrow.svg';
import garanty from './../../assets/garanty.svg';
import mesure from './../../assets/mesure.svg';
import paper from './../../assets/paper.svg';
import production from './../../assets/production.svg';
import phone from './../../assets/phone.svg';

import example from './../../images/example.jpg'

export default function HowToWork() {
    return (
        <div className="howToWork">
            <div className="container">
                <h3>Как мы работаем</h3>
                <div className="scheme">
                    <div>
                        <img src={phone}/>
                        <p>Вы звоните/
                            оставляете заявку на просчет/
                            пишете на почту/
                            заказываете обратный звонок</p>
                    </div>
                    <img src={arrow} alt="arrow"/>
                   <div>
                       <img src={mesure}/>
                       <p>Если условия и ориентировочная цена Вас устраивают, то мы осуществляем замер на объекте</p>
                   </div>
                    <img src={arrow} alt="arrow"/>
                   <div>
                       <img src={paper}/>
                       <p>По итогом замера мы составляем окончательное коммерческое предложение, заключаем договор</p>
                   </div>
                    <img src={arrow} alt="arrow"/>
                   <div>
                       <img src={production}/>
                       <p>Осуществляется изготовление конструкции / комплектование заказа, в согласованные с Вами сроки производится монтаж изделия</p>
                   </div>
                    <img src={arrow} alt="arrow"/>
                    <div>
                        <img src={garanty}/>
                        <p>Осуществляем гарантийное и постгарантийное обслуживание</p>
                    </div>
                </div>
            </div>
        </div>
    )
}