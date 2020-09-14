import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import VodaIIResidences from '../images/VodaIIResidences.jpg';
import VodaIResidences from '../images/VodaI.jpg';
import cutlerBayMiddle from '../images/cutlerBayMiddle.jpg';
import arrow from '../images/arrow.png';

const items = [
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
        src: cutlerBayMiddle,
        altText: 'Slide 3',
        caption: 'Cutler Bay Middle School'
    }
]

const Consulting = props => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if(animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if(animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if(animating) return;
        setActiveIndex(newIndex);
    }
    
    const slides = items.map((item) => {
        return(
            <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
                <img src={item.src} alt={item.src} />
                <CarouselCaption captionHeader={item.caption} />
            </CarouselItem>
        )
    })

    return (
        <div className='consultingContainer'>
            <div className='carouselContainer'>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
                <h5>Some of our projects</h5>
                <img className='arrow' src={arrow} alt='arrow from toptal' />
                <Link to='/consulting/projects'>
                    <button>Browse Projects!</button>
                </Link>
            </div>
        </div>

    )    
}

export default Consulting;