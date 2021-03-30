import React from 'react';
import '../../styles/Contact.css';

export default function Contact(props) {
    return (
        <div className='contact' id='contact'>
            <h1>Contact Me</h1>
            <p className='contact_text'>Feel free to reach out through any of the following services:</p>
            <div className='contact_links'>
                <a href='https://www.linkedin.com/in/tylerekaireb/'>LinkedIn</a>
                <a href='https://github.com/tekaireb/'>GitHub</a>
                <a href='mailto:tylerekaireb@gmail.com'>Email</a>
            </div>
        </div>
    );
}