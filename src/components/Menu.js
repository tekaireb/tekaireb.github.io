import React from 'react';
import '../styles/Menu.css';

var menu_options = [
    {
        label: "About",
        link: ""
    }
]

export default function Menu(props) {

    return (
        <div className='menu'>
            <div className='logo_container'>
                <img />
                <span></span>
            </div>
            <div className='options_container'>

            </div>
        </div>
    );
}