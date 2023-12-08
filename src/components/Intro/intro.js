import React from 'react'
import './intro.css'
//import myimg from '../../assets/myimg.jpg'
const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Royal Castelino</span><br/>MCA Graduate</span>
                <p className='introPara'>A motivated individual with knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.</p>
            </div>
            <img src="" alt="" className="bg"/>
        </section>
    )
}

export default Intro;