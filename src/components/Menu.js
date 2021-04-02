import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';

import logo from '../img/logo.svg';
import menu from '../img/menu.svg';
import exit from '../img/exit.svg';

var menu_options = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "#projects" },
    // { label: "Contact", link: "#contact" }
]

function is_active(link) {
    let url = window.location.href;

    if (link === '/') return url.endsWith('/'); // Handle home page
    return url.endsWith(link.substring(1)); // Check URL against link (ignore first char, #)
}

export default function Menu(props) {
    // Detect whether or not window is scrolled
    const [scroll, set_scroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            set_scroll(window.scrollY > 20);
        });
    }, []);

    // Detect scroll direction
    const [scroll_dir, set_scroll_dir] = useState("up");

    useEffect(() => {
        const threshold = 0;
        let last_y = window.pageYOffset,
            ticking = false;

        const update_scroll_dir = () => {
            const y = window.pageYOffset;

            ticking = false;
            if (Math.abs(y - last_y) < threshold) return;

            set_scroll_dir(y > last_y ? 'down' : 'up');
            last_y = Math.max(y, 0);
        };

        const on_scroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update_scroll_dir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", on_scroll);

        // console.log(scroll_dir);

        return () => window.removeEventListener("scroll", on_scroll);
    }, [scroll_dir]);

    return (
        <div className={
            'menu ' +
            (scroll && !props.menu_open ? 'menu_scrolled ' : '') +
            (scroll_dir === 'down' ? 'menu_hidden' : '')}
        >
            <a className='logo_container' href='/'>
                <img src={logo} class='menu_logo' alt='Tyler Ekaireb Monogram Logo' />
                <span className='menu_logo_text'>Tyler Ekaireb</span>
            </a>
            <div className={'options_container ' + (window.innerWidth <= 700 && props.menu_open ? 'sidebar_open' : '')}>
                {menu_options.map(o =>
                    <a className={'menu_option ' + (is_active(o.link) ? 'active' : '')} href={o.link}>
                        <code onClick={() => props.set_menu_open(false)}>
                            {o.label}
                        </code>
                    </a>
                )}
            </div>
            <div
                onClick={() => props.set_menu_open(!props.menu_open)}
                className={'menu_button ' + (props.menu_open ? 'menu_button_open' : '')}
            >
                {!props.menu_open && <img src={menu} className='menu_icon' alt='open menu icon' />}
                {props.menu_open && <img src={exit} className='menu_icon' alt='close menu icon' />}
            </div>
        </div>
    );
}