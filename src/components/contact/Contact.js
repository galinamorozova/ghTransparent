import './contact.scss';
import phone from './../../assets/phone.svg';
import map from './../../assets/map.svg';
import letter from './../../assets/letter.svg';
import site from './../../assets/site.svg';

import Map from './Map';

export default function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="info">
                    <h4>КОНТАКТЫ:</h4>
                    <div className="contacts">
                        <img src={phone}/>
                        <a href="tel:+74732287672">+7 (473) 228-76-72</a>
                    </div>
                    <div className="contacts">
                        <img src={phone}/>
                        <a href="tel:+79081428392">+7 (908) 142-83-92</a>
                    </div>
                    <div className="contacts">
                        <img src={letter}/>
                        <p>2287276@mail.ru</p>
                    </div>
                   <div className="contacts">
                       <img src={map}/>
                       <p>г.Воронеж, Московский пр-т, 11И, оф. 18</p>
                   </div>
                    <div className="contacts">
                        <img src={site} alt=""/>
                        <a href="https://aluminservice.ru" style={{fontWeight:"bold"}}>aluminservice.ru</a>
                    </div>
                    <p style={{marginBottom:"10px"}}>Наш основной сайт - алюминивое остекление и другая наша продукция</p>
                </div>
                <div className="map">
                    <Map/>
                </div>
            </div>
        </div>
    )
}