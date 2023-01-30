import "./contact.css"
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import Swal from 'sweetalert2';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const form = useRef();
  const [username, setUsername] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMessage, setUserMessage] = useState('')

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    Toast.fire({
      icon: 'success',
      title: 'Thanks for your message, I will respond as soon as possible!',
      background: '#F5F6F7',
      color: 'black'
    })
    setUsername('')
    setUserEmail('')
    setUserMessage('')
  }; 

  return (
    <div className="contact-content-container">
      <div className="contact-container">
        <div className="contact-message-container">
          <h1>Get In Touch</h1>
          <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <div className="contact-icons-container">
            <div className="contact-icons-row1">
              <div className="contact-icon">
                <a href='tel:7602189344'>
                  <PhoneIcon sx={{ fontSize: '2.5em' }}></PhoneIcon>
                </a>
              </div>
            </div>
            <div className="contact-icons-row2">
              <div className="contact-icon">
                <a href='https://instagram.com/zerogravityaerialphotography' target='_blank' rel='noreferrer'>
                  <InstagramIcon sx={{ fontSize: '2.5em' }}></InstagramIcon>
                </a>
              </div>
              <div className="contact-icon">
                <a href='https://www.google.com/search?q=Zero+Gravity+Aerial+Photography%2C+Washington+St%2C+La+Quinta%2C+CA+92253&rlz=1C5CHFA_enUS753US753&oq=zero+gravi&aqs=chrome.0.69i59l2j69i57j0i433i512j0i512j69i60j69i61l2.4254j0j7&sourceid=chrome&ie=UTF-8#ip=1' target='_blank' rel='noreferrer'>
                  <GoogleIcon sx={{ fontSize: '2.5em' }}></GoogleIcon>
                </a>
              </div>

            </div>
          </div>
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <label className="contact-labels" htmlFor='user_name'>Name</label>
            <input className='contact-inputs' placeholder='Type Your Name...' id="user_name" type="text" name="user_name" value={username} onChange={e => setUsername(e.target.value)} required />
            <label className="contact-labels" htmlFor='user_email'>Email</label>
            <input className='contact-inputs' placeholder='Type Your Email...' id='user_email' type="email" name="user_email" value={userEmail} onChange={e => setUserEmail(e.target.value)} required />
            <label className="contact-labels">Message</label>
            <textarea className='contact-inputs' placeholder='How can I help you?' name="message" value={userMessage} onChange={e => setUserMessage(e.target.value)} rows={4} cols={4} required />
            <button className='contact-button' type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="contact-icons-container-mobile">
        <div className="contact-icon-mobile">
          <a href='tel:7602189344'>
            <PhoneIcon sx={{ fontSize: '2em' }}></PhoneIcon>
          </a>
        </div>
        <div className="contact-icon-mobile">
          <a href="https://www.instagram.com/zerogravityaerialphotography" target='_blank' rel='noreferrer'>
            <InstagramIcon sx={{ fontSize: '2em' }}></InstagramIcon>
          </a>
        </div>
        <div className="contact-icon-mobile">
          <a href="https://www.google.com/search?q=Zero+Gravity+Aerial+Photography%2C+Washington+St%2C+La+Quinta%2C+CA+92253&rlz=1C5CHFA_enUS753US753&oq=zero+gravi&aqs=chrome.0.69i59l2j69i57j0i433i512j0i512j69i60j69i61l2.4254j0j7&sourceid=chrome&ie=UTF-8#ip=1" target='_blank' rel="noreferrer">
            <GoogleIcon sx={{ fontSize: '2em' }}></GoogleIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;