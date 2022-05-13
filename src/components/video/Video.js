import './video.scss';
import {React, useState} from "react";
import Slider from "react-slick";
import video from "./../../images/vid1.mp4"
import video2 from "./../../images/vid2.mp4"
import video3 from "./../../images/vid3.mp4"
// import tit1 from "./../../images/1.jpeg"
// import tit2 from "./../../images/2.jpeg"
// import tit3 from "./../../images/3.jpeg"
// import tit4 from "./../../images/4.jpeg"
// import tit5 from "./../../images/5.jpeg"
// import tit6 from "./../../images/6.jpeg"
// import tit7 from "./../../images/7.jpeg"
// import tit8 from "./../../images/8.jpeg"
// import tit9 from "./../../images/9.jpeg"
// import tit10 from "./../../images/10.jpeg"
// import tit11 from "./../../images/11.jpeg"
// import tit12 from "./../../images/12.jpeg"
// import tit13 from "./../../images/13.jpeg"
// import tit14 from "./../../images/14.jpeg"
// import tit15 from "./../../images/15.jpeg"

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
    return (
        <div className='video'>
            <div className="container">
                <div className="forMobile">
                    <Slider
                        asNavFor={nav2}
                        ref={slider => (setNav1(slider))}
                        {...settings}>
                        <div className="pictureContainer forMobile">
                            <img src="https://i.ibb.co/L0f9tp2/1.jpg" alt="прозрачные роллеты" className="picture"/>
                        </div>
                        <div className="pictureContainer forMobile">
                            <img src="https://i.ibb.co/XsHJmZ2/2.jpg" alt="прозрачные роллеты" className="picture"/>
                        </div>
                        <div className="pictureContainer forMobile">
                            <img src="https://i.ibb.co/qk2PndZ/3.jpg" alt="прозрачные роллеты" className="picture"/>
                        </div>
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
                        <div>
                            <video className="videoContent" controls autoPlay muted>
                                <source src={video2} type="video/mp4"/>
                            </video>
                        </div>
                        <div>
                            <video className="videoContent" controls autoPlay muted>
                                <source src={video3} type="video/mp4"/>
                            </video>
                        </div>
                    </Slider>
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (setNav2(slider))}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        {...settings2}>
                        <div className="pictureContainer2 forMobile">
                            <img src="https://i.ibb.co/L0f9tp2/1.jpg" alt="прозрачные роллеты" className="picture2"/>
                        </div>
                        <div className="pictureContainer2 forMobile">
                            <img src="https://i.ibb.co/XsHJmZ2/2.jpg" alt="прозрачные роллеты" className="picture2"/>
                        </div>
                        <div className="pictureContainer2 forMobile">
                            <img src="https://i.ibb.co/qk2PndZ/3.jpg" alt="прозрачные роллеты" className="picture2"/>
                        </div>
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
                        <div>
                            <video className="videoContent2" controls muted>
                                <source src={video2} type="video/mp4"/>
                            </video>
                        </div>
                        <div>
                            <video className="videoContent2" width="95" height="95" controls muted>
                                <source src={video3} type="video/mp4"/>
                            </video>
                        </div>
                    </Slider>
                </div>
                <div className="forDesktop">
                    <Slider
                        asNavFor={nav2}
                        ref={slider => (setNav1(slider))}
                        {...settings}>
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
                        <div>
                            <video className="videoContent" controls autoPlay muted>
                                <source src={video2} type="video/mp4"/>
                            </video>
                        </div>
                        <div>
                            <video className="videoContent" controls autoPlay muted>
                                <source src={video3} type="video/mp4"/>
                            </video>
                        </div>
                    </Slider>
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (setNav2(slider))}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        {...settings2}>
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
                        <div>
                            <video className="videoContent2" controls muted>
                                <source src={video2} type="video/mp4"/>
                            </video>
                        </div>
                        <div>
                            <video className="videoContent2" width="95" height="95" controls muted>
                                <source src={video3} type="video/mp4"/>
                            </video>
                        </div>
                    </Slider>
                </div>

            </div>
        </div>
    )
}

