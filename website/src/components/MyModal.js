import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';


const MyModal = (props) => {
    const [activeIndexPrivate, setActiveIndexPrivate] = useState(0);
    const [activeIndexPublic, setActiveIndexPublic] = useState(0);
    const [animatingPrivate, setAnimatingPrivate] = useState(false);
    const [animatingPublic, setAnimatingPublic] = useState(false);

    const nextPrivate = () => {
      if(animatingPrivate) return;
      const nextIndex = activeIndexPrivate === props.img.length - 1 ? 0 : activeIndexPrivate + 1;
      setActiveIndexPrivate(nextIndex);
  }

  const previousPrivate = () => {
      if(animatingPrivate) return;
      const nextIndex = activeIndexPrivate === 0 ? props.img.length - 1 : activeIndexPrivate - 1;
      setActiveIndexPrivate(nextIndex);
  }

  const goToIndexPrivate = (newIndex) => {
    if(animatingPrivate) return;
    setActiveIndexPrivate(newIndex);
}

const privateSlides = props.img.map((item) => {
  return(
      <CarouselItem onExiting={() => setAnimatingPrivate(true)} onExited={() => setAnimatingPrivate(false)} key={item}>
          <img src={item} alt={item.src} className='carouselImg' />
          <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
  )
})

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='modalCarouselContainer'>
              <Carousel activeIndex={activeIndexPrivate} next={nextPrivate} previous={previousPrivate}>
                  <CarouselIndicators items={props.img} activeIndex={activeIndexPrivate} onClickHandler={goToIndexPrivate} />
                  {privateSlides}
              </Carousel>
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousPrivate} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={nextPrivate} />
            </div>
            <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyModal;