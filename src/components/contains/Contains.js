import './contains.scss';

import brawn from './../../images/brawn.jpeg';
import white from './../../images/white.jpeg';
import prozrach from './../../images/prozrach.jpeg';
import bronza from './../../images/bronza.jpeg';
import box from './../../images/korob.jpeg';
import polotno from './../../images/polotno.jpeg';
import auto from './../../images/auto.jpeg';
import manual from './../../images/manual.jpg';
import lock from './../../images/lock.jpeg';
import sos from './../../images/sos.jpeg';

export default function Contains() {
    return (
        <div className='contains' id="contains">
            <div className="container">
                <h3>Комплектация</h3>
                <h4>Основная комплектация:</h4>
                <div className="policarb">
                    <div className="basic"><img src={polotno} alt=""/></div>
                    <p>ПОЛОСЫ ИЗ ПОЛИКАРБОНАТА, толщиной
                        до 5мм, соединенные между собой алюминиевым
                        профилем, который обеспечивает дополнительную
                        жесткость и устойчивость конструкции</p>
                </div>
                <h4>Цвета поликарбоната:</h4>
                <div className="policarb_colors">
                    <div className="color-container">
                        <div className="color"><img src={prozrach} alt=""/></div>
                        <p>Прозрачные</p>
                    </div>
                    <div className="color-container">
                        <div className="color"><img src={bronza} alt=""/></div>
                        <p>Тонированная бронза</p>
                    </div>
                </div>
                <div className="metal">
                    <div className="basic"><img src={box} alt=""/></div>
                    <p>КОРОБ, который крепится наверху конструкции (под
                        крышей веранды/террасы), и в который при
                        желании полотно убирается полностью
                    </p>
                </div>
                <h4>Цвета металлического короба
                    и профилей:</h4>
                <div className="metal_colors">
                    <div>
                        <div className="color"><img src={white} alt=""/></div>
                        <p>Белый</p>
                    </div>
                    <div>
                        <div className="color"><img src={brawn}  alt=""/></div>
                        <p>Коричневый</p>
                    </div>
                </div>
                <p className="ral">ОДНАКО, по Вашему желанию возможно окрашивание в любой цвет RAL.</p>
                <div className="control">
                    <div className="basic"><img src={manual} alt=""/></div>
                    <p>ручное управление. Простая система подъема и
                        опускания рольставни, с которой не возникнет
                        сложностей
                    </p>
                </div>
                <h4>Дополнительная комплектация:</h4>
                <div className="extra">
                    <div>
                        <img src={auto} alt=""/>
                        <p>блок со встроенным радиоканалом и пультом дистанционного управления</p>
                    </div>
                    <div>
                        <img src={lock} alt=""/>
                        <p>замки, запорные элементы</p>
                    </div>
                    <div>
                        <img src={sos} alt=""/>
                        <p>устройство аварийного открытия при отсутствии электричества на объекте</p>
                    </div>
                </div>

            </div>
        </div>
    )
}