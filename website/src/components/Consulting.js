import React, {useState, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import gsap, {TweenMax, TimelineLite, Power3} from 'gsap';
import VodaIIResidences from '../images/VodaIIResidences.jpg';
import VodaIResidences from '../images/VodaI.jpg';
import cutlerBayMiddle from '../images/cutlerBayMiddle.jpg';
import arrow from '../images/arrow.png';
import bayHarbor from '../images/BayHarborResidences.jpg';
import mequityStorage from '../images/MequityStorage.jpg';
import cubeSmartStorage from '../images/CubeSmartStorage.jpg';

const privateProjects = [
    {
        src: VodaIIResidences,
        altText: 'Slide 1',
        caption: 'Voda II Residences'
    },
    {
        src: VodaIResidences,
        altText: 'Slide 2',
        caption: 'Voda I Residences'
    },
    {
        src: bayHarbor,
        altText: 'Slide 3',
        caption: 'Bay Harbor Residences'
    }
]

const publicProjects = [
    {
        src: cutlerBayMiddle,
        altText: 'Slide 1',
        caption: 'Cutler Bay Middle School'
    },
    {
        src: mequityStorage,
        altText: 'Slide 2',
        caption: 'Mequity Storage'
    },
    {
        src: cubeSmartStorage,
        altText: 'Slide 3',
        caption: 'Cube Smart Storage'
    }
]

const Consulting = props => {
    const [activeIndexPrivate, setActiveIndexPrivate] = useState(0);
    const [activeIndexPublic, setActiveIndexPublic] = useState(0);
    const [animatingPrivate, setAnimatingPrivate] = useState(false);
    const [animatingPublic, setAnimatingPublic] = useState(false);
    const history = useHistory();

    const nextPrivate = () => {
        if(animatingPrivate) return;
        const nextIndex = activeIndexPrivate === privateProjects.length - 1 ? 0 : activeIndexPrivate + 1;
        setActiveIndexPrivate(nextIndex);
    }

    const previousPrivate = () => {
        if(animatingPrivate) return;
        const nextIndex = activeIndexPrivate === 0 ? privateProjects.length - 1 : activeIndexPrivate - 1;
        setActiveIndexPrivate(nextIndex);
    }

    const nextPublic = () => {
        if(animatingPublic) return;
        const nextIndex = activeIndexPublic === publicProjects.length - 1 ? 0 : activeIndexPublic + 1;
        setActiveIndexPublic(nextIndex);
    }

    const previousPublic = () => {
        if(animatingPublic) return;
        const nextIndex = activeIndexPublic === 0 ? publicProjects.length - 1 : activeIndexPublic - 1;
        setActiveIndexPublic(nextIndex);
    }

    const goToIndexPrivate = (newIndex) => {
        if(animatingPrivate) return;
        setActiveIndexPrivate(newIndex);
    }

    const goToIndexPublic = (newIndex) => {
        if(animatingPublic) return;
        setActiveIndexPublic(newIndex);
    }

    const takeToPublicProjects = () => {
        history.push('/consulting/public/projects');
    }

    const takeToPrivateProjects = () => {
        history.push('/consulting/private/projects');
    }
    
    const privateSlides = privateProjects.map((item) => {
        return(
            <CarouselItem onExiting={() => setAnimatingPrivate(true)} onExited={() => setAnimatingPrivate(false)} key={item.src}>
                <img src={item.src} alt={item.src} />
                <CarouselCaption captionHeader={item.caption} />
            </CarouselItem>
        )
    })

    const publicSlides = publicProjects.map((item) => {
        return(
            <CarouselItem onExiting={() => setAnimatingPublic(true)} onExited={() => setAnimatingPublic(false)} key={item.src}>
                <img src={item.src} alt={item.src} />
                <CarouselCaption captionHeader={item.caption} />
            </CarouselItem>
        )
    })

    return (
        <div className='consultingContainer'>
            <div className='consultingSectionContainer'>
                <div className='titleContainer'>
                    <h4>Architectural</h4>
                    <h4>Structural</h4>
                    <h4>Civil</h4>
                </div>
                <div className='content'>
                    <p>Pellentesque eget tincidunt mus viverra facilisi phasellus, eget eleifend. Venenatis ullamcorper, enim euismod aptent, rhoncus nonummy aliquam praesent phasellus laoreet. Fermentum montes est nullam inceptos, vitae praesent in augue nibh dolor placerat nec posuere nostra sem tincidunt tristique a dignissim leo fames class hymenaeos fermentum vestibulum justo. Tellus nisi metus.</p>
                </div>
            </div>

            <div className='contentContainer'>
                <h2>Private Projects</h2>
                <div className='carouselContainer'>
                <Carousel activeIndex={activeIndexPrivate} next={nextPrivate} previous={previousPrivate}>
                    <CarouselIndicators items={privateProjects} activeIndex={activeIndexPrivate} onClickHandler={goToIndexPrivate} />
                    {privateSlides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousPrivate} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={nextPrivate} />
                </Carousel>
                </div>
                <div className='content'>
                    <p>Here goes some text about private projects</p>
                </div>
                <div className='privateButton' onClick={takeToPrivateProjects}>Browse Projects!</div>
            </div>
            

            <div className='content2Container'>
                <h2 id='title'>Public Projects</h2>
                <div className='carousel2Container'>
                    <Carousel activeIndex={activeIndexPublic} next={nextPublic} previous={previousPublic}>
                        <CarouselIndicators items={publicProjects} activeIndex={activeIndexPublic} onClickHandler={goToIndexPublic} />
                        {publicSlides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousPublic} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={nextPublic} />
                    </Carousel>
                </div>
                <div className='content'>
                    <p>Here goes some text about public projects</p>
                </div>
                <div className='publicButton' onClick={takeToPublicProjects}>Browse Projects!</div>
            </div>
            
        </div>

    )    
}

export default Consulting;