import './prices.scss';
import {React, useContext, useEffect, useState, useRef} from "react";
import Slider from "react-slick";
import StoreContext from "../context";
// import pleh1 from './../../images/1pleh.webp';
// import pleh2 from './../../images/2pleh.webp';
// import pleh3 from './../../images/3pleh.webp';
// import pleh4 from './../../images/4pleh.webp';
// import pervoz1 from './../../images/1perv.webp';
// import pervoz2 from './../../images/2perv.webp';
// import pervoz3 from './../../images/3perv.webp';
// import pervoz4 from './../../images/4perv.webp';
// import pervoz5 from './../../images/5perv.webp';
// import pervoz6 from './../../images/6perv.webp';
// import pervoz7 from './../../images/7perv.webp';
// import pervoz8 from './../../images/8perv.webp';
// import hlev1 from './../../images/1hlev.webp';
// import hlev2 from './../../images/2hlev.webp';
// import hlev3 from './../../images/3hlev.webp';
// import hlev4 from './../../images/4hlev.webp';
// import novo1 from './../../images/1novovor.webp';
// import novo2 from './../../images/2novovor.webp';
// import novo3 from './../../images/3novovor.webp';
// import novo4 from './../../images/4novovor.webp';
// import novo5 from './../../images/5novovor.webp';
// import novo6 from './../../images/6novovor.webp';
// import bob1 from './../../images/1bob.webp';
// import bob2 from './../../images/2bob.webp';
// import bob3 from './../../images/3bob.webp';
// import bob4 from './../../images/4bob.webp';
// import nel1 from './../../images/1nelzh.webp';
// import nel2 from './../../images/2nelzh.webp';
// import nel3 from './../../images/3nelzh.webp';
// import nel4 from './../../images/4nelzh.webp';
// import mal1 from './../../images/1maly.webp';
// import mal2 from './../../images/2maly.webp';
// import mal3 from './../../images/3maly.webp';
// import med1 from './../../images/1med.webp';
// import med2 from './../../images/2med.webp';
// import rep1 from "./../../images/1.webp"
// import rep2 from './../../images/2.webp';
// import rep6 from './../../images/6.webp';
// import rep7 from './../../images/7.webp';
// import rep8 from './../../images/8.webp';
// import rep9 from './../../images/9.webp';
// import rep10 from './../../images/10.webp';
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

const images1 = [
    {src: "https://i.ibb.co/9tHfFYR/1pleh.webp", year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
    {src: "https://i.ibb.co/xDwytND/2pleh.webp", year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
    {src: "https://i.ibb.co/QFNFHqZ/3pleh.webp", year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
    {src: "https://i.ibb.co/f2MZ6JX/4pleh.webp", year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
]

// const images1 = [
//     {src: `${pleh1}`, year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
//     {src: `${pleh2}`, year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
//     {src: `${pleh3}`, year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
//     {src: `${pleh4}`, year: "2021", size: "19,9 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "275 тыс. руб."},
// ]
const images2 = [
    {src: "https://i.ibb.co/9YtD2PM/1perv.webp", year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: "https://i.ibb.co/1KTxQNs/2perv.webp", year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: "https://i.ibb.co/dMyznWf/3perv.webp", year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: "https://i.ibb.co/gPPtRwZ/4perv.webp", year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: "https://i.ibb.co/KzvWxFd/5perv.webp", year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: "https://i.ibb.co/M5QDFrd/6perv.webp", year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: "https://i.ibb.co/gPSm6m8/7perv.webp", year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
    {src: "https://i.ibb.co/GkrPJB0/8perv.webp", year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
]
// const images2 = [
//     {src: `${pervoz1}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
//     {src: `${pervoz2}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
//     {src: `${pervoz3}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
//     {src: `${pervoz4}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
//     {src: `${pervoz5}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
//     {src: `${pervoz6}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
//     {src: `${pervoz7}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
//     {src: `${pervoz8}`, year: "2021", size: "16,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price:"240 тыс. руб."},
// ]
const images3 = [
    {src: "https://i.ibb.co/0ZWpNNj/1hlev.webp", year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
    {src: "https://i.ibb.co/nfrsppt/2hlev.webp", year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
    {src: "https://i.ibb.co/Dwf6M46/3hlev.webp", year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
    {src: "https://i.ibb.co/LdWCDDM/4hlev.webp", year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
    ]
// const images3 = [
//     {src: `${hlev1}`, year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
//     {src: `${hlev2}`, year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
//     {src: `${hlev3}`, year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
//     {src: `${hlev4}`, year: "2021", size: "11,5 кв.м.", colorP: "прозрачный", colorM: "коричный", addition: "автоматика, клавиши открывания, блок аварийного открывания", price: "180 тыс. руб."},
// ]
const images4 = [
    {src: "https://i.ibb.co/mBLWhQK/1novovor.webp", year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    {src: "https://i.ibb.co/tp7Lk8b/2novovor.webp", year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    {src: "https://i.ibb.co/qmHHSn9/3novovor.webp", year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    {src: "https://i.ibb.co/wJ4SHRZ/4novovor.webp", year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    {src: "https://i.ibb.co/3MrHhKc/5novovor.webp", year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    {src: "https://i.ibb.co/3kN3PZr/6novovor.webp", year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
    ]
// const images4 = [
//     {src: `${novo1}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
//     {src: `${novo2}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
//     {src: `${novo3}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
//     {src: `${novo4}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
//     {src: `${novo5}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
//     {src: `${novo6}`, year: "2020", size: "12,48 кв.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания, аварийное открывание", price: "185 тыс. руб."},
// ]

const images5 = [
    {src: "https://i.ibb.co/dcM02QQ/1bob.webp", year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
    {src: "https://i.ibb.co/8PvTjmG/2bob.webp", year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
    {src: "https://i.ibb.co/hMtdJ4N/3bob.webp", year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
    {src: "https://i.ibb.co/DWRzWjX/4bob.webp", year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
    ]
// const images5 = [
//     {src: `${bob1}`, year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
//     {src: `${bob2}`, year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
//     {src: `${bob3}`, year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
//     {src: `${bob4}`, year: "2020", size: "24,14 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты", price: "225 тыс. руб."},
// ]
const images6 = [
    {src: "https://i.ibb.co/5sCYWJM/1nelzh.webp", year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
    {src: "https://i.ibb.co/QngKbN5/2nelzh.webp", year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
    {src: "https://i.ibb.co/pLxWtgp/3nelzh.webp", year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
    {src: "https://i.ibb.co/c6nyB9Z/4nelzh.webp", year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
    ]
// const images6 = [
//     {src: `${nel1}`, year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
//     {src: `${nel2}`, year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
//     {src: `${nel3}`, year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
//     {src: `${nel4}`, year: "2022", size: "15,3 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, клавиши открывания", price: "228,6 тыс. руб."},
// ]

const images7 = [
    {src: "https://i.ibb.co/2sqVjTw/1maly.webp", year: "2022", size: "24,2 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "340 тыс. руб."},
    {src: "https://i.ibb.co/993cNLq/2maly.webp", year: "2022", size: "24,2 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "340 тыс. руб."},
    {src: "https://i.ibb.co/SnLrtx4/3maly.webp", year: "2022", size: "24,2 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "340 тыс. руб."},
    ]

// const images7 = [
//     {src: `${mal1}`, year: "2022", size: "24,2 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "340 тыс. руб."},
//     {src: `${mal2}`, year: "2022", size: "24,2 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "340 тыс. руб."},
//     {src: `${mal3}`, year: "2022", size: "24,2 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "340 тыс. руб."},
// ]

const images8 = [
    {src: "https://i.ibb.co/frHWjD2/1med.webp", year: "2021", size: "17,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "199 тыс.руб."},
    {src: "https://i.ibb.co/Xt3Gdms/2med.webp", year: "2021", size: "17,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "199 тыс.руб."},
    ]
// const images8 = [
//     {src: `${med1}`, year: "2021", size: "17,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "199 тыс.руб."},
//     {src: `${med2}`, year: "2021", size: "17,1 кв.м.", colorP: "прозрачный", colorM: "коричневый", addition: "автоматика, пульты, блок аварийного открывания", price: "199 тыс.руб."},
// ]

// const images9 = [
//     {src: `${rep1}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
//     {src: `${rep2}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
//     {src: `${rep7}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
//     {src: `${rep6}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
//     {src: `${rep8}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
//     {src: `${rep9}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
//     {src: `${rep10}`, year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
// ]

const images9 = [
    {src: "https://i.ibb.co/yP9LSRW/1.webp", year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: "https://i.ibb.co/YkvZyq8/2.webp", year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: "https://i.ibb.co/CVXTD9S/6.webp", year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: "https://i.ibb.co/vk8Gc3b/7.webp", year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: "https://i.ibb.co/VgbvJvH/8.webp", year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: "https://i.ibb.co/9rkws65/9.webp", year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},
    {src: "https://i.ibb.co/bK6tCNb/10.webp", year: "2022", size: "27,33 кв.м.", colorP: "прозрачный", colorM: "антрацит", addition: "автоматика, пульты, блок аварийного открывания", price: "420 тыс.руб."},

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