import React, {useState} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import hibiscus from '../images/38HibiscusIsland.jpg';
import hibiscus2 from '../images/38HibiscusIsland2.jpg';
import hibiscus3 from '../images/38HibiscusIsland3.jpg';

const pictures = [
    {
        src: hibiscus,
        caption: 'Hellooooo niknan!',
        altText: 'testing testing 123'
    },
    {
        src: hibiscus2,
        caption: 'These are just tests',
        altText: 'Testing testing 123'
    },
    {
        src: hibiscus3,
        caption: 'Hope it comes out nice!!!',
        altText: 'goteemmmm'
    }
];

const Construction = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if(animating) return;
        const nextIndex = activeIndex === pictures.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    const previous = () => {
        if(animating) return;
        const nextIndex = activeIndex === 0 ? pictures.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if(animating) return;
      setActiveIndex(newIndex);
  }

  const slides = pictures.map((item) => {
    return(
        <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item}>
            <img src={item.src} alt={item.src} className='carouselImg' />
            <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
    )
  })

    return(
        <div className='constructionContainer'>
            <div className='carouselContainer'>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={pictures} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>
            <p>Still trying to figure out how to style this page and the development page...</p>
        </div>
    )
}

export default Construction;