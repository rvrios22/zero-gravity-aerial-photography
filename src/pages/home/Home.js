import React from 'react'
import './home.css'
import StarIcon from '@mui/icons-material/Star';
import ImageCarousel from '../../components/home-image-carousel/ImageCarousel';

function Home() {
  

  return (
    <div>
      <div className='home-header'>
        <h1>Welcome to Zero Gravity Aerial Photography</h1>
      </div>
      <div className='landing-video-container'>
        {/* <video width='600' height='338' muted loop autoPlay className='landing-video'>
          <source src='./videos/landingVideo1.m4v' type='video/mp4' />
          Your browswer does not support the video
        </video> */}
        <img src='./lowRes/Empire_Zenyara02.jpg' alt='Arizona Sunset' className='temp-home-header'/>
      </div>
      <main>
        <ImageCarousel />
        <hr className='spacer'></hr>
        <h3 className='testimony-header'>Testimonials</h3>
        <div className='testimonials-container'>
          <div className='testimony'>
            <div className='star-container'>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
            </div>
            <p className='testimony-text'>
              "Thank you Zero Gravity!!!! I needed good-quality site photos and Travis DELIVERED. Responsive, professional, and right-away... and now we have these unbelievable images to support our transaction. We loved doing business with Zero Gravity and look forward to using you guys again."
            </p>
            <p className='testimony-author bold'>
              -Sam H.
            </p>
          </div>
          <div className='testimony'>
            <div className='star-container'>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
            </div>
            <p className='testimony-text'>
              "I am a casual cosplayer and LARPER and wanted someone to film and action shot during one of our combat sequences and Travis was more than able to get the job done! He is an excellent person to work with and is friendly and professional. Highly recommend"
            </p>
            <p className='testimony-author bold'>
              -Charles V.
            </p>
          </div>
          <div className='testimony'>
            <div className='star-container'>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
              <StarIcon sx={{ color: 'gold' }}></StarIcon>
            </div>
            <p className='testimony-text'>
              "Good job. My photos are beautiful.. Everything I needed. Quickly available. I recommend."
            </p>
            <p className='testimony-author bold'>
              -GWENAELLE B.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home