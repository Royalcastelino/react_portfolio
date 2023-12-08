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
                <a href='https://drive.google.com/file/d/1u6OTnrqQq1qjXROIR-MDi6ssxF9pOtXp/view?usp=sharing' className='desktopMenuListItem'>Resume</a>
            </div>
            <button className='desktopMenuBtn' onClick={scrollToContact}>
                <img src={contact} alt="btnimg1" className='desktopMenuImg'/>Contact Me</button>
        </nav>
    )
}
export default Navbar;