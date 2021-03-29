import React, { useState, useEffect } from 'react';
import '../styles/Menu.css';

import logo from '../img/logo.svg';

var menu_options = [
    { label: "About", link: "/#about" },
    { label: "Work", link: "/#jobs" },
    { label: "Projects", link: "/#projects" },
    { label: "Contact", link: "/#contact" }
]

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

        console.log(scroll_dir);

        return () => window.removeEventListener("scroll", on_scroll);
    }, [scroll_dir]);


    return (
        <div className={
            'menu ' +
            (scroll ? 'menu_scrolled ' : '') +
            (scroll_dir === 'down' ? 'menu_hidden' : '')}
        >
            <a className='logo_container' href='/'>
                <img src={logo} class='menu_logo' alt='Tyler Ekaireb Monogram Logo' />
                <span className='menu_logo_text'>Tyler Ekaireb</span>
            </a>
            <div className='options_container'>
                {menu_options.map(o =>
                    <code>
                        <a className='menu_option' href={o.link}>
                            {o.label}
                        </a>
                    </code>
                )}
            </div>
            <div className='menu_button'>☰</div>
        </div>
    );
}