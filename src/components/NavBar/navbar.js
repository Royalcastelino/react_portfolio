import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contact from '../../assets/contact.png';

const Navbar =()=>
{
    const scrollToContact = () =>
    {
        const contactSection = document.getElementById("contacts");
        if (contactSection)
        {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className='desktopMenu'>
                <Link to="intro" className='desktopMenuListItem'>Home</Link>
                <Link to="skills" className='desktopMenuListItem'>Skills</Link>
                <Link to="projects" className='desktopMenuListItem'>Projects</Link>
                <a href="https://drive.google.com/file/d/1xFaQ0md_C85v0Bej_cPDU4k80hU7-I36/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='desktopMenuListItem'>Resume</a>
            </div>
            <button className='desktopMenuBtn' onClick={scrollToContact}>
                <img src={contact} alt="btnimg1" className='desktopMenuImg'/>Contact Me</button>
        </nav>
    )
}
export default Navbar;