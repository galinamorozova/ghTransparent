import './video.scss';
import {React, useState} from "react";
import Slider from "react-slick";
import video from "./../../images/vid1.mp4"
// import video2 from "./../../images/vid2.mp4"
// import video3 from "./../../images/vid3.mp4"
// import tit1 from "./../../images/1.webp"
// import tit2 from "./../../images/2.webp"
// import tit3 from "./../../images/3.webp"
// import tit4 from "./../../images/4.webp"
// import tit5 from "./../../images/5.webp"
// import tit6 from "./../../images/6.webp"
// import tit7 from "./../../images/7.webp"
// import tit8 from "./../../images/8.webp"
// import tit9 from "./../../images/9.webp"
// import tit10 from "./../../images/10.webp"
// import tit11 from "./../../images/11.webp"
// import tit12 from "./../../images/12.webp"
// import tit13 from "./../../images/13.webp"
// import tit14 from "./../../images/14.webp"
// import tit15 from "./../../images/15.webp"

const images = [
    {src: "https://i.ibb.co/L0f9tp2/1.jpg"},
    {src: "https://i.ibb.co/XsHJmZ2/2.jpg"},
    {src: "https://i.ibb.co/qk2PndZ/3.jpg"},
    {src: "https://i.ibb.co/WVmDTQ0/4.jpg"},
    {src: "https://i.ibb.co/ChK8p4X/5.jpg"},
    {src: "https://i.ibb.co/hcC6RKY/6.jpg"},
    {src: "https://i.ibb.co/MhF0mYG/7.jpg"},
    {src: "https://i.ibb.co/93XWTkb/8.jpg"},
    {src: "https://i.ibb.co/3R54Nh8/9.jpg"},
    {src: "https://i.ibb.co/nbdQH8f/10.jpg"},
    {src: "https://i.ibb.co/qRsKyzm/11.jpg"},
    {src: "https://i.ibb.co/LZ5TbLT/12.jpg"},
    {src: "https://i.ibb.co/bLyxw61/13.jpg"},
    {src: "https://i.ibb.co/5v3vvXF/14.jpg"},
    {src: "https://i.ibb.co/s5BFVyt/15.jpg"},
    // {src: tit1}, {src: tit2}, {src: tit3}, {src: tit4}, {src: tit5}, {src: tit6}, {src: tit7}, {src: tit8},
    // {src: tit9}, {src: tit10}, {src: tit11}, {src: tit12}, {src: tit13}, {src: tit14}, {src: tit15}
]


export default function Video() {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        lazyLoad: true,
        fade: true,
        swipe: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const settings2 = {
        dots: false,
        arrows:false,
        infinite: true,
        lazyLoad: true,
        swipe: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const settings3 = {
        dots: true,
        arrows:true,
        infinite: true,
        lazyLoad: true,
        fade: true,
        swipe: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='video'>
            <div className="container">
                <div className="forMobile">
                    <Slider
                        {...settings3}>
                        {/*<div className="pictureContainer forMobile">*/}
                        {/*    <img src="https://i.ibb.co/L0f9tp2/1.jpg" alt="прозрачные роллеты" className="picture"/>*/}
                        {/*</div>*/}
                        {/*<div className="pictureContainer forMobile">*/}
                        {/*    <img src="https://i.ibb.co/XsHJmZ2/2.jpg" alt="прозрачные роллеты" className="picture"/>*/}
                        {/*</div>*/}
                        {/*<div className="pictureContainer forMobile">*/}
                        {/*    <img src="https://i.ibb.co/qk2PndZ/3.jpg" alt="прозрачные роллеты" className="picture"/>*/}
                        {/*</div>*/}
                        {/*<iframe className="videoContent"*/}
                        {/*        loading="lazy"*/}
                        {/*        title="aluminservice.ru"*/}
                        {/*        src="https://www.youtube.com/embed/9_O_HjClwLM"*/}
                        {/*        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope"*/}
                        {/*        allowFullScreen></iframe>*/}
                        <div>
                            <video className="videoContent" id="video" controls autoPlay muted>
                                <source src={video} type="video/mp4"/>
                            </video>
                        </div>

                        {images.map(img => {
                            return <div className="pictureContainer">
                                <img src={img.src} alt="прозрачные роллеты" className="picture"/>
                            </div>
                        })}
                        {/*<div>*/}
                        {/*    <video className="videoContent" controls autoPlay muted>*/}
                        {/*        <source src={video2} type="video/mp4"/>*/}
                        {/*    </video>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <video className="videoContent" controls autoPlay muted>*/}
                        {/*        <source src={video3} type="video/mp4"/>*/}
                        {/*    </video>*/}
                        {/*</div>*/}
                    </Slider>
                </div>
                <div className="forDesktop">
                    <Slider
                        asNavFor={nav2}
                        ref={slider => (setNav1(slider))}
                        {...settings}>
                        {/*<iframe className="videoContent"*/}
                        {/*        loading="lazy"*/}
                        {/*        title="aluminservice.ru"*/}
                        {/*        src="https://www.youtube.com/embed/9_O_HjClwLM"*/}
                        {/*        allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope"*/}
                        {/*        allowFullScreen></iframe>*/}
                        <div>
                            <video className="videoContent" id="video" controls autoPlay muted>
                                <source src={video} type="video/mp4"/>
                            </video>
                        </div>

                        {images.map(img => {
                            return <div className="pictureContainer">
                                <img src={img.src} alt="прозрачные роллеты" className="picture"/>
                            </div>
                        })}
                        {/*<div>*/}
                        {/*    <video className="videoContent" controls autoPlay muted>*/}
                        {/*        <source src={video2} type="video/mp4"/>*/}
                        {/*    </video>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <video className="videoContent" controls autoPlay muted>*/}
                        {/*        <source src={video3} type="video/mp4"/>*/}
                        {/*    </video>*/}
                        {/*</div>*/}
                    </Slider>
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (setNav2(slider))}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        {...settings2}>
                        {/*<iframe className="videoContent2"*/}
                        {/*        loading="lazy"*/}
                        {/*        title="aluminservice.ru"*/}
                        {/*        src="https://www.youtube.com/embed/9_O_HjClwLM"*/}
                        {/*        frameBorder="0"*/}
                        {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"*/}
                        {/*        allowFullScreen></iframe>*/}
                        <div>
                            <video className="videoContent2" controls muted>
                                <source src={video} type="video/mp4"/>
                            </video>
                        </div>
                        {images.map(img => {
                            return <div className="pictureContainer2">
                                <img src={img.src} alt="прозрачные роллеты" className="picture2"/>
                            </div>
                        })}
                        {/*<div>*/}
                        {/*    <video className="videoContent2" controls muted>*/}
                        {/*        <source src={video2} type="video/mp4"/>*/}
                        {/*    </video>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <video className="videoContent2" width="95" height="95" controls muted>*/}
                        {/*        <source src={video3} type="video/mp4"/>*/}
                        {/*    </video>*/}
                        {/*</div>*/}
                    </Slider>
                </div>

            </div>
        </div>
    )
}

