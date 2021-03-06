import React from 'react' 
import './Carousel.scss'
import Desktop from '../../../images/desktop.jpg'
import Tablet from '../../../images/tablet.jpg'
import Slider from 'react-slick';



export const FadeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Slider {...settings}>
            <img src={Desktop}/>
            <img src={Tablet}/>
        </Slider>
    )
}