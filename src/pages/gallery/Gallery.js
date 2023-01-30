import React, { useState } from 'react'
import { IMAGES as imgArr, videoThumbNails } from './imagesArray'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './gallery.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';

function Gallery() {
  const [activeImages, setActiveImages] = useState(false)
  const [activeVideos, setActiveVideos] = useState(false)
  const [loadButton, setLoadButton] = useState(true)
  const [imgArrLength, setImgArrLength] = useState(3)
  const [imgIdx, setImgIdx] = useState(null)
  const [videoIdx, setVideoIdx] = useState(null)
  const length = imgArr.length;
  const vidLength = videoThumbNails.length;
  const slicedImgArr = imgArr.slice(0, imgArrLength)

  const handleLoadMore = () => {
    if (slicedImgArr.length == 18) {
      setLoadButton(false)
    }
    setImgArrLength(imgArrLength + 3)

  }

  const nextImg = () => {
    setImgIdx(imgIdx === slicedImgArr.length - 1 ? 0 : imgIdx + 1);
  };

  const prevImg = () => {
    setImgIdx(imgIdx === 0 ? slicedImgArr.length - 1 : imgIdx - 1);
  };

  const handleShowImage = (event, idx) => {
    setActiveImages(true)
    setImgIdx(idx)
  }

  const nextVideo = () => {
    setVideoIdx(videoIdx === vidLength - 1 ? 0 : videoIdx + 1);
  };

  const prevVideo = () => {
    setVideoIdx(videoIdx === 0 ? vidLength - 1 : videoIdx - 1);
  };

  const handleShowVideo = (event, idx) => {
    setActiveVideos(true)
    setVideoIdx(idx)
  }

  const handleImgExit = () => {
    setActiveImages(false)
  }

  const handleVideoExt = () => {
    setActiveVideos(false)
  }

  return (
    <div>
      <div className={activeImages ? 'gallery-large-image-container' : 'overlay-deactive'}>
        <span className='close-icon-container'>
          <CloseIcon onClick={handleImgExit} sx={{ color: 'white' }}></CloseIcon>
        </span>
        <div className='large-image-container'>
          <div className='arrow-container left-arrow'>
            <KeyboardArrowLeftIcon onClick={prevImg} sx={{ color: 'white', fontSize: '2em' }}></KeyboardArrowLeftIcon>
          </div>
          {slicedImgArr.map((data, idx) => (
            <img key={idx} className={imgIdx === idx ? 'large-image' : 'overlay-deactive'} src={`./galleryPhotos/${data.image}.jpg`} />
          ))}
          <div className='arrow-container right-arrow'>
            <KeyboardArrowRightIcon onClick={nextImg} sx={{ color: 'white', fontSize: '2em' }}></KeyboardArrowRightIcon>
          </div>
        </div>
      </div>
      <div className='gallery-header-container'>
        <h1 className='gallery-header'>Gallery</h1>
      </div>
      <hr className='gallery-spacer'></hr>
      <div className='gallery-images-container'>
        {slicedImgArr.map((img, index) => (
          <LazyLoadImage
            key={index}
            src={`./galleryPhotos/${img.image}.jpg`}
            alt={img.alt}
            placeholderSrc={`./lowRes/${img.image}.jpg`}
            effect='blur'
            className='gallery-image'
            onClick={event => handleShowImage(event, index)}
          />

        ))}
      </div>
      <div className='button-container'>
        <button className={loadButton ? 'gallery-load-button' : 'overlay-deactive'} onClick={handleLoadMore}>Load More...</button>
      </div>

      {/* <div className={activeVideos ? 'gallery-large-video-container' : 'overlay-deactive'}>
        <span className='close-icon-container'>
          <CloseIcon onClick={handleVideoExt} sx={{ color: 'white' }}></CloseIcon>
        </span>
        <div className='large-image-container'>
          <div className='arrow-container left-arrow'>
            <KeyboardArrowLeftIcon onClick={prevVideo} sx={{ color: 'white', fontSize: '2em' }}></KeyboardArrowLeftIcon>
          </div>
          <div className='gallery-video-container'>
            {videoThumbNails.map((data, idx) => (
              <video key={idx} width='600' height='338' muted loop autoPlay className={videoIdx === idx ? 'gallery-video' : 'overlay-deactive'}>
                <source src={`./videos/${data.video}.m4v`} type='video/mp4' />
                Your browswer does not support the video
              </video>
            ))}
          </div>
          <div className='arrow-container right-arrow'>
            <KeyboardArrowRightIcon onClick={nextVideo} sx={{ color: 'white', fontSize: '2em' }}></KeyboardArrowRightIcon>
          </div>
        </div>
      </div> */}
      {/* <div className='gallery-header-container videos'>
        <h1 className='gallery-header videos'>Videos</h1>
      </div>
      <hr className='gallery-spacer'></hr>
      <div className='gallery-images-container'>
        {videoThumbNails.map((data, idx) => (
          <img
            src={`./videoThumbNails/${data.image}.png`}
            alt={data.alt}
            key={idx}
            className='gallery-image'
            loading='lazy'
            onClick={event => handleShowVideo(event, idx)}
          />
        ))}
      </div> */}
    </div>
  )
}

export default trackWindowScroll(Gallery)