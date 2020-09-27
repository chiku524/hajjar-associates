import React, {useState, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
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
    const [isStructuralOpen, setIsStructuralOpen] = useState(false);
    const [isArchitecturalOpen, setIsArchitecturalOpen] = useState(false);
    const [isCivilOpen, setIsCivilOpen] = useState(false);
    const [structuralArrow, setStructuralArrow] = useState('down');
    const [architecturalArrow, setArchitecturalArrow] = useState('down');
    const [civilArrow, setCivilArrow] = useState('down');
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

    const toggleStructural = () => {
        setIsStructuralOpen(!isStructuralOpen);
        isStructuralOpen ? setStructuralArrow('down') : setStructuralArrow('up');
    }

    const toggleArchitectural = () => {
        setIsArchitecturalOpen(!isArchitecturalOpen);
        isArchitecturalOpen ? setArchitecturalArrow('down') : setArchitecturalArrow('up');
    }

    const toggleCivil = () => {
        setIsCivilOpen(!isCivilOpen);
        isCivilOpen ? setCivilArrow('down') : setCivilArrow('up');
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
                <h2>CONSULTING</h2>
                <div className='titleContainer'>
                    <div className='collapseContainer' onClick={toggleStructural}>
                        <h4>Architectural</h4>
                        <span className={structuralArrow}>&#10151;</span>  
                    </div>
                    <Collapse isOpen={isStructuralOpen}>
                        <Card>
                            <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                            </CardBody>
                        </Card>
                    </Collapse>
                    <div className='collapseContainer' onClick={toggleArchitectural}>
                        <h4>Structural</h4>
                        <span className={architecturalArrow}>&#10151;</span>
                            
                    </div>
                    <Collapse isOpen={isArchitecturalOpen}>
                        <Card>
                            <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                            </CardBody>
                        </Card>
                    </Collapse>
                    <div className='collapseContainer' onClick={toggleCivil}>
                        <h4>Civil</h4>
                        <span className={civilArrow}>&#10151;</span>
                            
                    </div>
                    <Collapse isOpen={isCivilOpen}>
                        <Card>
                            <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>

            <div className='contentContainer'>
                <div className='flex'>
                    <h2>Private Projects</h2>
                    <div className='carouselContainer'>
                        <Carousel activeIndex={activeIndexPrivate} next={nextPrivate} previous={previousPrivate}>
                            <CarouselIndicators items={privateProjects} activeIndex={activeIndexPrivate} onClickHandler={goToIndexPrivate} />
                            {privateSlides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousPrivate} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={nextPrivate} />
                        </Carousel>
                    </div>
                </div>
                <div className='contentFlex'>
                    <div className='content'>
                        <p>Here goes some text about private projects</p>
                    </div>
                    <div className='privateButton' onClick={takeToPrivateProjects}>Browse Projects!</div>
                </div>
            </div>
            

            <div className='content2Container'>
                <div className='flex'>
                    <h2 id='title'>Public Projects</h2>
                    <div className='carousel2Container'>
                        <Carousel activeIndex={activeIndexPublic} next={nextPublic} previous={previousPublic}>
                            <CarouselIndicators items={publicProjects} activeIndex={activeIndexPublic} onClickHandler={goToIndexPublic} />
                            {publicSlides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousPublic} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={nextPublic} />
                        </Carousel>
                    </div>
                </div>
                <div className='contentFlex'>
                    <div className='content'>
                        <p>Here goes some text about public projects</p>
                    </div>
                    <div className='publicButton' onClick={takeToPublicProjects}>Browse Projects!</div>
                </div>
            </div>
            
        </div>

    )    
}

export default Consulting;