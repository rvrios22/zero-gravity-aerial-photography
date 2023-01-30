import React from 'react'
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './imageCarousel.css'
import { carouselData } from './carouselData'

function ImageCarousel() {
    const [current, setCurrent] = useState(0);
    const length = carouselData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(carouselData) || length <= 0) {
        return null;
    }
    return (
        <div className='image-carousel-container'>
            <hr className='spacer'></hr>
            <h3 id='about-me' className='about-me-header'>About Me</h3>
            {carouselData.map((data, idx) => (
                <div key={idx}>
                    <div className={idx === current ? 'about-me-photo-container active' : "about-me-photo-container"}>
                        <div className='about-me'>
                            <p>{data.desc}</p>
                        </div>
                        <div className='about-me-photo'>
                            <img src={`./galleryPhotos/${data.image}.jpg`} alt={data.alt} />
                        </div>
                    </div>
                </div>
            ))}
            <div className='arrow-dot-container'>
                <div className='arrow-container left-arrow'>
                    <KeyboardArrowLeftIcon onClick={prevSlide} sx={{ fontSize: '2em' }}></KeyboardArrowLeftIcon>
                </div>
                <div className='arrow-container right-arrow'>
                    <KeyboardArrowRightIcon onClick={nextSlide} sx={{ fontSize: '2em' }}></KeyboardArrowRightIcon>
                </div>
            </div>
        </div>
    )
}

export default ImageCarousel