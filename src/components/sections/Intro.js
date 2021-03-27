import React, { useState, useEffect } from 'react';
import '../../styles/Intro.css'

export default function Intro(props) {
    const [typed_text, set_typed_text] = useState('Tyler Ekaireb'); // Text typed within typewriter
    const [typing, set_typing] = useState(false);                   // Typing flag

    // Phrases to be typed
    const text = ['Tyler Ekaireb', 'an engineer', 'a programmer', 'a tinkerer', 'a learner', 'a smoothie-maker'];

    // Delays in milliseconds
    const type_delay = 200;     // Delay between typing characters
    const erase_delay = 100;    // Delay between erasing characters   
    const new_delay = 5000;     // Delay between phrases
    // Index variables
    let text_index = 0;         // Index of phrase
    let char_index = 12;        // Index of char within phrase

    // Type each character within phrase, then call erase
    function type() {
        // Type as long as there are characters left in phrase
        if (char_index <= text[text_index].length) {
            if (!typing) set_typing(true);
            set_typed_text(text[text_index].substring(0, char_index++));
            setTimeout(type, type_delay);
        }
        // Call erase when finished
        else {
            set_typing(false);
            setTimeout(erase, new_delay);
        }
    }

    // Erase each character within phrase, then call type (with next phrase)
    function erase() {
        // Erase as long as there are characters left in typed_text
        if (char_index > 0) {
            if (!typing) set_typing(true);
            set_typed_text(text[text_index].substring(0, --char_index));
            setTimeout(erase, erase_delay);
        }
        // Go to next word and call type when finished
        else {
            set_typing(false);
            text_index++;
            if (text_index >= text.length) text_index = 0;
            setTimeout(type, type_delay + 1000);
        }
    }

    // Call erase when the page first loads
    useEffect(() => {
        if (text.length) setTimeout(erase, 4000);
    }, []);

    return (
        <div className='intro'>
            <p className='greeting'>Hello</p>
            <div class="typewriter">
                <p>I'm <span class='typed_text'>{typed_text}</span><span class={'cursor ' + (typing ? 'typing' : '')}>&nbsp;</span></p>
            </div>
            <div className='down_button' onClick={() => document.querySelectorAll('.projects')[0].scrollIntoView()}>↓</div>
        </div>
    );
}