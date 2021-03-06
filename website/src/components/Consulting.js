import React, {useState, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import VodaIResidences from '../images/VodaI.jpg';
import dolceVitta from '../images/DolceVittaTownhouses.jpg';
import cutlerBayMiddle from '../images/cutlerBayMiddle.jpg';
import hibiscus from '../images/38HibiscusIsland.jpg';
import berkeleyHotel from '../images/BerkeleyHotel3.jpg';
import bayHarbor from '../images/BayHarborResidences.jpg';
import mequityStorage from '../images/MequityStorage.jpg';
import cubeSmartStorage from '../images/CubeSmartStorage.jpg';
import vineland from '../images/VinelandCenter.jpg';
import miamiBeach5th from '../images/MiamiBeachFifth&Alton.jpg';

const privateProjects = [
    {
        src: hibiscus,
        altText: 'Slide 1',
        caption: '38 Hibiscus Island'
    },
    {
        src: VodaIResidences,
        altText: 'Slide 2',
        caption: 'Voda I Residences'
    },
    {
        src: berkeleyHotel,
        altText: 'Slide 3',
        caption: 'Berkeley Hotel'
    }
]

const publicProjects = [
    {
        src: cubeSmartStorage,
        altText: 'Slide 1',
        caption: 'Cube Smart Storage'
    },
    {
        src: miamiBeach5th,
        altText: 'Slide 2',
        caption: 'Miami Beach Fifth & Alton'
    },
    {
        src: vineland,
        altText: 'Slide 3',
        caption: 'Vineland K-8 Center'
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
        history.push('/consulting/public-projects');
    }

    const takeToPrivateProjects = () => {
        history.push('/consulting/private-projects');
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
                            Our services include but not limited to planning, design, construction and operation of buildings, such as analysis and integrated design of environmental systems (energy conservation, HVAC, plumbing, lighting, fire protection, acoustics, vertical and horizontal transportation), structural systems, behavior and properties of building components and materials, and construction management.
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
                            We consult with our clients to focus on the framework of structures of buildings, and on designing those structures to withstand the stresses and pressures of their environment and remain safe, stable and secure throughout their use. Our company focuses on the structural engineering of buildings and any structures within an educational setting.
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
                            Our consulting deals with walk-way bridges that connect buildings as well as parking lots, bleachers, and docking systems for ships. 
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>

            <div className='contentContainer'>
                <div className='flex'>
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
                        <h2>Private Projects</h2>
                        <p>M. Hajjar & Associates, Inc. (MHA) has completed many projects within the private sector through two different categories: Residential & Commercial. Residential -  new apartments/ condominiums, mixed use projects and private homes. Commercial -  storage facilities, shopping centers, retail stores, restaurants, automotive dealerships, and more!</p>
                    </div>
                    <div className='privateButton' onClick={takeToPrivateProjects}>Browse Projects!</div>
                </div>
            </div>
            

            <div className='content2Container'>
                <div className='flex'>
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
                        <h2>Public Projects</h2>
                        <p>M. Hajjar & Associates, Inc. (MHA) has completed many projects within the public sector ranging from Architect/Engineer projects, Maintenance Projects, and specialty projects. Some of our clients include: Miami Dade County Public Schools, Miami International Airport, Fort Lauderdale International Airport, Port of Miami, Fire Department, and many more!</p>
                    </div>
                    <div className='publicButton' onClick={takeToPublicProjects}>Browse Projects!</div>
                </div>
            </div>  
        </div>
    )    
}

export default Consulting;