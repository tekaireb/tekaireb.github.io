import React, { useState, useEffect } from 'react';
import '../../styles/About.css';


export default function About(props) {
    const [line_index, set_line_index] = useState(0); // Index of latest line
    const [char_index, set_char_index] = useState(0); // Index of char within latest line
    const [typing, set_typing] = useState(false);     // Typing flag

    // Phrases to be typed
    var lines = [
        { command: 'echo $tyler.origin', result: ['Los Angeles, CA'] },
        { command: 'echo $tyler.education', result: ['{', '     Degree: Computer Engineering,', '     Institution: UC Santa Barbara', '   }'] },
        { command: 'echo $tyler.interests', result: ['["IoT", "Distributed Systems", "ML", "Hiking", "Piano"]'] },
        { command: 'echo $tyler.email', result: ['tylerekaireb@gmail.com'] },
        { command: '', result: '' }
    ];

    // Delays in milliseconds
    const type_delay = 110;     // Delay between typing characters
    const new_delay = 1200;     // Delay between phrases

    // Type each character within command, then print result and call next command
    function type(char_index, line_index) {
        // Type as long as there are characters left in command
        if (char_index < lines[line_index].command.length) {
            if (!typing) set_typing(true);
            set_char_index(char_index + 1);
            setTimeout(() => type(char_index + 1, line_index), type_delay);
        }
        // Print result and type type new command when finished
        else {
            set_typing(false);
            set_line_index(line_index + 1);
            set_char_index(0);
            if (line_index < lines.length - 1)
                setTimeout(() => type(0, line_index + 1), new_delay);
        }
    }

    // Call type when terminal element comes into view
    function scroll_trigger() {
        window.removeEventListener('scroll', scroll_trigger);

        let bounding = document.querySelector('.about_terminal').getBoundingClientRect();

        // If terminal is in view, start typing
        if (bounding.top <= (window.innerHeight || document.documentElement.clientHeight)) {
            setTimeout(() => type(0, 0), 1000);
            window.removeEventListener('scroll', scroll_trigger);
        } else
            setTimeout(() => window.addEventListener('scroll', scroll_trigger), 250);
    }

    // Activate scroll trigger when page first loads
    useEffect(() => {
        scroll_trigger();
    }, []);

    return (
        <div id='about'>
            <h1>About Me</h1>
            <div className='about_container'>
                <div className='about_description'>
                    <p style={{ fontSize: 20, color: 'white' }}>Hello there!</p>
                    <p>I am an aspiring computer engineer who enjoys bridging the gaps between hardware and software, frontend and backend, people and things.</p>
                    <p>I enjoy building systems from the ground up and ripping them apart, be they low-power embedded devices or large-scale distributed algorithms.</p>
                    <p>I'm graduating in June 2023, and I'm interested in computer science summer internships. Please feel free to reach out!</p>
                    <div className='about_buttons'>
                        <a className='about_button' href='mailto:tylerekaireb@gmail.com'>Email</a>
                        <a className='about_button' href='https://www.linkedin.com/in/tylerekaireb/'>Resume</a>
                    </div>
                </div>
                <div className='about_terminal'>
                    {lines.map((line, i) =>
                        <>
                            {i < line_index && <div>
                                {line.command && <p className='command'> &gt; {line.command}</p>}
                                {!line.command && <p className='command'> &gt; <span className='cursor'>&nbsp;</span></p>}
                                {line.result && <p className='result'> =&gt; {line.result.map(r => <span>{r}<br /></span>)}</p>}
                            </div>}
                            {i === line_index && <div>
                                <p className='command'> &gt; {line.command.substring(0, char_index)}<span className={'cursor ' + (typing ? 'typing' : '')}>&nbsp;</span></p>
                            </div>}
                        </>
                    )}
                </div>

            </div>
        </div>
    );
}