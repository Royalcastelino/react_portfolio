import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faCss3, faHtml5, faJava, faJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
const Skills=()=>{
    return(
        <section id='skills'>
            <h2 className='skillsTitle'>Skill's</h2>
            <div className='skillscontainer'>
                <div className='cubespinner'>
                    <div className='face1' >
                        <FontAwesomeIcon className='fai' icon={faAndroid}/>
                        <div className='innerdiv'>Android</div>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon className='fai'  icon={faHtml5}/>
                        <div className='innerdiv'>HTML</div>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon className='fai' icon={faCss3}/>
                        <div className='innerdiv'>CSS3</div>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon className='fai' icon={faJava}/>
                        <div className='innerdiv'>Java</div>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon className='fai' icon={faReact}/>
                        <div className='innerdiv'>ReactJS</div>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon className='fai' icon={faPhp}/>
                        <div className='innerdiv'>PHP</div>
                    </div>
                    <div className='face7'>
                        <FontAwesomeIcon className='fai' icon={faJs}/>
                        <div className='innerdiv'>Javascript</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;