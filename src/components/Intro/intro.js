// import React from 'react'
import './intro.css'
import React, { useState, useEffect } from 'react';
import myimg from '../../assets/mypic.png'
const Intro = () => {


    const [displayText, setDisplayText] = useState('');
    useEffect(() => {
    const originalText = 'Royal Castelino';
    const displayLetters = () =>
    {
        let i = 0;
      const intervalId = setInterval(() => {
        if (i <= originalText.length) {
          setDisplayText(originalText.slice(0, i));
          i += 1;
        } else {
          clearInterval(intervalId);
        }
      }, 200);
    };
    displayLetters();
    return () => clearTimeout();}, []);



    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>{displayText}</span><br/>MCA Graduate</span>
                <p className='introPara'>A motivated individual with knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.</p>
            </div><span><img src={myimg} alt="" className="bg"/></span>
        </section>
    )
}

export default Intro;