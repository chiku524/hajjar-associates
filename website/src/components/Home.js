import React from 'react';
import {Link} from 'react-router-dom';
import blueLogo from '../images/blueLogo.png';
import consultingImg from '../images/consultingImg.webp';
import development from '../images/development.webp';
import construction from '../images/construction.webp';

const Home = (props) => {

    return (
        <div className='homeContainer'>
            <div className='imgContainer'>
                <img src={blueLogo} alt='hajjar logo' />
            </div>
            <div className='services'>
                <h2>SERVICES</h2>
                <div className='big3'>
                    <div className='card'>
                        <Link to='/consulting' className='link'>
                            <img src={consultingImg} alt='wix-photo' />
                            <h5>Consulting</h5>
                            <p>M. Hajjar & Associates, Inc. consults in planning, design, modification, or rehabilitation of public and private infrastructure. Our engineers and architects are registered professionals who practice in many disciplines, including civil engineering, structural engineering, and architecture.</p>
                        </Link> 
                    </div>
                    <div className='card'>
                        <Link to='/construction' className='link'>
                            <img src={construction} alt='wix-photo' />
                            <h5>Construction</h5>
                            <p>M. Hajjar & Associates, Inc. construction services range from new built projects, maintenance projects or just simple renovations and rehabilitation. Our team has many years of experience within the field with a broad range of projects.</p>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to='development' className='link'>
                            <img src={development} alt='wix-photo' />
                            <h5>Development</h5>
                            <p>M. Hajjar & Associates, Inc. works with the city for affordable housing, new retail areas, private homes and condominiums as well as mixed-use projects. These are the projects that all construction, engineering, and other services are done in house.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Home;