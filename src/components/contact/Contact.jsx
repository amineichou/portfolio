import React from 'react';
import './contact.css'
const Contact = () => {
    return (
        <div className='contact-container'>
            <h3 style={{ textAlign: 'center', padding: '10px' }}><span>Contact Me</span></h3>
            <div className='contact'>
                <form
                    action="https://formspree.io/f/xpzbbkrq"
                    method="post">
                    <input type="email" name="email" id="email" required placeholder='email' />
                    <textarea type="text" name="message" id="message" required placeholder='message' cols="30" rows="10"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
