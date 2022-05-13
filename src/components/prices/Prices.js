import './prices.scss';
import {React, useContext, useEffect, useState, useRef} from "react";
import Slider from "react-slick";
import StoreContext from "../context";
import pleh1 from './../../images/1pleh.jpg';
import pleh2 from './../../images/2pleh.jpg';
import pleh3 from './../../images/3pleh.jpg';
import pleh4 from './../../images/4pleh.jpg';
import pervoz1 from './../../images/1perv.jpg';
import pervoz2 from './../../images/2perv.jpg';
import pervoz3 from './../../images/3perv.jpg';
import pervoz4 from './../../images/4perv.jpg';
import pervoz5 from './../../images/5perv.jpg';
import pervoz6 from './../../images/6perv.jpg';
import pervoz7 from './../../images/7perv.jpg';
import pervoz8 from './../../images/8perv.jpg';
import hlev1 from './../../images/1hlev.jpg';
import hlev2 from './../../images/2hlev.jpg';
import hlev3 from './../../images/3hlev.jpg';
import hlev4 from './../../images/4hlev.jpg';
import novo1 from './../../images/1novovor.jpg';
import novo2 from './../../images/2novovor.jpg';
import novo3 from './../../images/3novovor.jpg';
import novo4 from './../../images/4novovor.jpg';
import novo5 from './../../images/5novovor.jpg';
import novo6 from './../../images/6novovor.jpg';
import bob1 from './../../images/1bob.jpg';
import bob2 from './../../images/2bob.jpg';
import bob3 from './../../images/3bob.jpg';
import bob4 from './../../images/4bob.jpg';
import nel1 from './../../images/1nelzh.jpg';
import nel2 from './../../images/2nelzh.jpg';
import nel3 from './../../images/3nelzh.jpg';
import nel4 from './../../images/4nelzh.jpg';
import mal1 from './../../images/1maly.jpg';
import mal2 from './../../images/2maly.jpg';
import mal3 from './../../images/3maly.jpg';
import med1 from './../../images/1med.jpg';
import med2 from './../../images/2med.jpg';
import rep1 from "./../../images/1.jpeg"
import rep2 from './../../images/2.jpeg';
import rep3 from './../../images/3.jpeg';
import rep6 from './../../images/6.jpeg';
import rep7 from './../../images/7.jpeg';
import rep8 from './../../images/8.jpeg';
import rep9 from './../../images/9.jpeg';
import rep10 from './../../images/10.jpeg';
import emailjs from "@emailjs/browser";
import OrdinaryCircleLoader from "../loader/Loader";


const ExampleSlider = ({props}) => {
    const [show, setShow] = useState(false);
    const generalStore = useContext(StoreContext);


    useEffect(()=>{
        setShow(show);
    },[show])

    const handleSubmit = () => {
        setShow(!show);
        generalStore.setLayout(!show);

    }


    const counterClasses = ["slick-sliderrr"];
    if(show){
        counterClasses.push("active")
    }

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        lazyLoad: true,
        fade: true,
        swipe: true,
        className: `${counterClasses.join("")}`,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return <Slider
        {...settings}>
        {props.map(img => {
            return <div className="example" onClick={handleSubmit}>
                <div className="background"></div>
                <div className="pictureContainer">
                    <img src={img.src} alt="прозрачные роллеты" className="picture"/>
                </div>
                <div className="data">
                    <p><span>год:</span> {img.year}</p>
                    <p><span>размеры:</span> {img.size}</p>
                    <p><span>цвет поликарбоната:</span> {img.colorP}</p>
                    <p><span>цвет металла:</span> {img.colorM}</p>
                    <p><span>дополнительная комплектация:</span> {img.addition}</p>
                    <p><span>цена:</span> {img.price}</p>
                </div>
            </div>
        })}
    </Slider>
}

// const images1 = [
//     {src: "https://i.ibb.co/hCqvwk0/1pleh.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/GRsZvSr/2pleh.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/8xB8Zt7/3pleh.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/xqmCVQn/4pleh.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
// ]

const images1 = [
    {src: `${pleh1}`, year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
    {src: `${pleh2}`, year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
    {src: `${pleh3}`, year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
    {src: `${pleh4}`, year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
]
// const images2 = [
//     {src: "https://i.ibb.co/6wF3Sy8/1perv.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/wNKPynp/2perv.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/z8QFXsT/3perv.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/ZXQjTQN/4perv.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/XVsPGgx/5perv.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/PFjSs6z/6perv.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/5YH1R1h/7perv.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/Nr6BzpY/8perv.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
// ]
const images2 = [
    {src: `${pervoz1}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: `${pervoz2}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: `${pervoz3}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: `${pervoz4}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: `${pervoz5}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: `${pervoz6}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: `${pervoz7}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: `${pervoz8}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
]
// const images3 = [
//     {src: "https://i.ibb.co/4TMMSCt/1hlev.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/0r02zL4/2hlev.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/0Jwywf9/3hlev.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/vDB7k1k/4hlev.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     ]
const images3 = [
    {src: `${hlev1}`, year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
    {src: `${hlev2}`, year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
    {src: `${hlev3}`, year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
    {src: `${hlev4}`, year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
]
// const images4 = [
//     {src: "https://i.ibb.co/7VHFdt5/1novovor.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/hB1RQcP/2novovor.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/166t2vq/3novovor.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/nC9W029/4novovor.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/gW1yX8M/5novovor.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/7bmwp33/6novovor.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     ]
const images4 = [
    {src: `${novo1}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    {src: `${novo2}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    {src: `${novo3}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    {src: `${novo4}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    {src: `${novo5}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    {src: `${novo6}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
]

// const images5 = [
//     {src: "https://i.ibb.co/tszBDzj/1bob.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/2W5xkyY/2bob.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/Vj8mRqP/3bob.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/y4WyT5D/4bob.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     ]
const images5 = [
    {src: `${bob1}`, year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
    {src: `${bob2}`, year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
    {src: `${bob3}`, year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
    {src: `${bob4}`, year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
]
// const images6 = [
//     {src: "https://i.ibb.co/3dtBnv7/1nelzh.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/C5jMYyg/2nelzh.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/1sGsF5N/3nelzh.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/T0BbLrN/4nelzh.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     ]
const images6 = [
    {src: `${nel1}`, year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
    {src: `${nel2}`, year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
    {src: `${nel3}`, year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
    {src: `${nel4}`, year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
]

// const images7 = [
//     {src: "https://i.ibb.co/FHRyypb/1maly.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/z5XjvwN/2maly.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/n10F9RZ/3maly.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     ]

const images7 = [
    {src: `${mal1}`, year: "2022", size: "24,2 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "340 тыс. руб."},
    {src: `${mal2}`, year: "2022", size: "24,2 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "340 тыс. руб."},
    {src: `${mal3}`, year: "2022", size: "24,2 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "340 тыс. руб."},
]

// const images8 = [
//     {src: "https://i.ibb.co/t4ztF0r/1med.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     {src: "https://i.ibb.co/Qk0N9zz/2med.jpg", year: "", size: "", colorP: "", colorM: "", addition: ""},
//     ]
const images8 = [
    {src: `${med1}`, year: "2021", size: "17,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "199 тыс.руб."},
    {src: `${med2}`, year: "2021", size: "17,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "199 тыс.руб."},
]

const images9 = [
    {src: `${rep1}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: `${rep2}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: `${rep3}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: `${rep6}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: `${rep8}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: `${rep9}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: `${rep10}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
]

export const changeEventHandlerDecorator = (fn) => {
    return (e) => {
        e.persist();
        fn(e.target.value);
    };
};

export default function Prices() {

    const [send, setSend] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [valueName, setValueName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    const counterClasses = ["submitButton"];

    useEffect(()=> {
        setClicked(clicked);
        setSend(send);
        setValueName(valueName);
        setPhone(phone);
        setMessage(message);
    }, [form])

    if (clicked) {
        counterClasses.push("disabled");
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setClicked(true);
        emailjs.sendForm('service_voob34a', 'template_esaihct', form.current, 'T_LI95it-xjRg98z2')
            .then((result) => {
                console.log(result.text);
                setSend(true);
                setValueName("");
                setPhone("");
                setMessage("");
                setClicked(false);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="prices" id="prices">
            <div className="container">
                <h3>ЦЕНЫ & ПРИМЕРЫ РАБОТ</h3>
                <p>ЦЕНА на остекление прозрачными рольставнями рассчитывается в каждом случае ИНДИИДУАЛЬНО, поскольку
                    необходимо учесть слишком много сопутствующих факторов: размеры проемов, в том числе нестандартные,
                    толщина профиля, окрашивание в особый цвет, дополнительная комплектация, необходимость произвести
                    дополнительные строительно-монтажные работы для монтирования рольставни на объекте и т.д.</p>
                <p>Проще всего получить оринтировочную цену -
                    это сделать приблизительные замеры Ваших проемов
                    и сбросить их нам для просчета в форме ниже:</p>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="findPrice">
                        <input type="text"
                               name="name"
                               value={valueName}
                               onChange={changeEventHandlerDecorator(setValueName)}
                               placeholder="Имя *"
                               required/>
                        <input type="phone"
                               name="phone"
                               value={phone}
                               onChange={changeEventHandlerDecorator(setPhone)}
                               placeholder="Телефон *"
                               required/>
                        <textarea type="text"
                                  name="message"
                                  value={message}
                                  onChange={changeEventHandlerDecorator(setMessage)}
                                  placeholder="Цвет  полотна, цвет металла, автоматическое или ручное управление, местоположение объекта, иные дополнительные особенности"/>
                    </div>
                    <label>
                        <input type="checkbox" required/>
                        Согласие лица на обработку персональных данных в соответствии с ФЗ №152 от 27.07.2006
                    </label> <br/>
                    {!send &&
                        <button type="submit" value="send" className={counterClasses.join(" ")} onClick={()=>setClicked(true)}>
                            {!clicked ?
                                <>Отправить</> :
                               <span><OrdinaryCircleLoader/>
                                    Отправляется</span>
                            }
                        </button>
                    }
                    {send &&
                        <button type="submit" value="send" className="submitButton disabled" style={{padding:"12px 31px"}}>
                            Отправлено
                        </button>
                    }
                </form>

                <p >Общий же порядок цен на светопрозрачные рольставни из поликарбоната
                    можно узнать исходя из примеров наших работ:</p>
                <div className="works">
                    <ExampleSlider props={images9}/>
                    <ExampleSlider props={images1}/>
                    <ExampleSlider props={images2}/>
                    <ExampleSlider props={images3}/>
                    <ExampleSlider props={images4}/>
                    <ExampleSlider props={images5}/>
                    <ExampleSlider props={images6}/>
                    <ExampleSlider props={images7}/>
                    <ExampleSlider props={images8}/>
                </div>

            </div>
        </div>
    )
}