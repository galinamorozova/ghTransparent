import './features.scss';
import solyarn from './../../images/solyarnost.jpeg';
import zashita from './../../images/zashita.jpeg';
import variat from './../../images/variat.jpeg';
import proch from './../../images/prochnost.jpeg'

export default function Features() {
    return (
        <div className='features' id="features">
            <div className='container'>
                <h3>Преимущества</h3>
                <div className='featuresContainer'>
                    <div className='feature'>
                        <div><img src={solyarn} alt=""/></div>
                        <h4>СОЛЯРНОСТЬ</h4>
                        <p>пропускная способность рольставен до 90% солнечного света.</p>
                        <p>+ защита от ультрафиолета! </p>
                    </div>
                    <div className='feature'>
                        <div><img src={zashita} alt=""/></div>
                        <h4>ЗАЩИТА</h4>
                        <p>от осадков, ветра, снега, опадающих листьев, проникновения уличных животных </p>
                    </div>
                    <div className='feature'>
                        <div><img src={proch}  alt=""/></div>
                        <h4>ПРОЧНОСТЬ</h4>
                        <p>поликарбонат прочнее стекла в 250 раз. Он не разбивается, поэтому безопасней для детей</p>
                    </div>
                    <div className='feature'>
                        <div><img src={variat} alt=""/></div>
                        <h4>ВАРИАТИВНОСТЬ</h4>
                        <p>Окрашивание короба в любой цвет RAL, несколько видов цвета полотна, ручное/автоматическое
                            управление</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

