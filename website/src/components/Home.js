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
                            <p>Pellentesque eget tincidunt mus viverra facilisi phasellus, eget eleifend. Venenatis ullamcorper, enim euismod aptent, rhoncus nonummy aliquam praesent phasellus laoreet. Fermentum montes est nullam inceptos, vitae praesent in augue nibh dolor placerat nec posuere nostra sem tincidunt tristique a dignissim leo fames class hymenaeos fermentum vestibulum justo. Tellus nisi metus.</p>
                        </Link> 
                    </div>
                    <div className='card'>
                        <Link to='/construction' className='link'>
                            <img src={construction} alt='wix-photo' />
                            <h5>Construction</h5>
                            <p>Pellentesque eget tincidunt mus viverra facilisi phasellus, eget eleifend. Venenatis ullamcorper, enim euismod aptent, rhoncus nonummy aliquam praesent phasellus laoreet. Fermentum montes est nullam inceptos, vitae praesent in augue nibh dolor placerat nec posuere nostra sem tincidunt tristique a dignissim leo fames class hymenaeos fermentum vestibulum justo. Tellus nisi metus.</p>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to='development' className='link'>
                            <img src={development} alt='wix-photo' />
                            <h5>Development</h5>
                            <p>Pellentesque eget tincidunt mus viverra facilisi phasellus, eget eleifend. Venenatis ullamcorper, enim euismod aptent, rhoncus nonummy aliquam praesent phasellus laoreet. Fermentum montes est nullam inceptos, vitae praesent in augue nibh dolor placerat nec posuere nostra sem tincidunt tristique a dignissim leo fames class hymenaeos fermentum vestibulum justo. Tellus nisi metus.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Home;