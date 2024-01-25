
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './custom.css';
const Presentation = () => {
    const [hover, setHover] = useState({});
    return (
        <div className='presentation-container' style={{}}>
            <div className='presentation'>
                <h1 style={{ color: 'white', fontSize: '1rem', color: 'var(--secondary-color)' }} >
                    Hi, my name is <br />
                    <span style={{ fontSize: '5rem', color: 'white' }}> Itiel Felix
                    </span>
                    <br />
                    and yes, I'm a <br />
                    <span className='hollow' style={{ fontSize: '5rem', fontWeight: '' }}>Web Developer
                    </span>
                </h1>
                <div className="social-icon">
                    <a href="https://github.com/itiel-felix" target="_blank" title='Check my Github!'>
                    <FaGithub color={hover.github ? 'var(--secondary-color)' : 'white'} size='1.5rem'
                        onMouseEnter={() => setHover({ ...hover, github: true })}
                        onMouseLeave={() => setHover({ ...hover, github: false })}
                    />
                    </a>
                    <a href="https://www.linkedin.com/in/itiel-felix-069216159" target="_blank"  title='Check my LinkedIn!'>
                    <span style={{ paddingRight: '1rem' }} />
                    <FaLinkedin color={hover.linkedin ? 'var(--secondary-color)' : 'white'} size='1.5rem'
                        onMouseEnter={() => setHover({ ...hover, linkedin: true })}
                        onMouseLeave={() => setHover({ ...hover, linkedin: false })} />
                    </a>
                </div>

            </div>
            <div className='picture-container'>
                <div className='picture'>
                    <img src={process.env.PUBLIC_URL + '/pikachu.webp'} alt='Itiel' style={{ marginTop: '0rem', marginLeft: '-8rem', width: '180%' }} />
                </div>
            </div>
        </div>
    );
}
export default Presentation;