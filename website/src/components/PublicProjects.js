import React, {useState} from 'react';
import MyModal from './MyModal';
import leJune from '../images/221LeJuneOfficeBuilding2.jpg';
import leJune2 from '../images/221LeJuneOfficeBuilding.jpg';
import chevrolet from '../images/Chevrolet (2).jpg';
import chevrolet2 from '../images/Chevrolet.jpg';
import cubeSmart from '../images/CubeSmartStorage.jpg';
import cubeSmart2 from '../images/CubeSmartStorage2.jpg';
import cutlerBayMiddle from '../images/cutlerBayMiddle.jpg';
import cypressVillage from '../images/CypressVillageShoppingCenter.jpg';
import cypressVillage2 from '../images/CypressVillageShoppingCenter2.jpg';
import doralStorage from '../images/DoralStorage.jpg';
import doralStorage2 from '../images/DoralStorage2.jpg';
import doralStorage3 from '../images/DoralStorage3.jpg';
import eastCoastStorage from '../images/EastCoastStorage.jpg';
import eastCoastStorage2 from '../images/EastCoastStorage2.jpg';
import flamingoPlaza from '../images/FlamingoPlaza.jpg';
import flamingoPlaza2 from '../images/FlamingoPlaza2.jpg';
import fortLaudyStorage from '../images/FortLauderdaleStorage.jpg';
import fortLaudyStorage2 from '../images/FortLauderdaleStorage2.jpg';
import gableEdgeStorage from '../images/GableEdgeStorage.jpg';
import gableEdgeStorage2 from '../images/GableEdgeStorage2.jpg';
import kendall124 from '../images/Kendall124.jpg';
import kendall1242 from '../images/Kendall124-2.jpg';
import lancasterPlaza from '../images/LancasterPlaza.jpg';
import lancasterPlaza2 from '../images/LancasterPlaza2.jpg';
import mmStorage from '../images/M&MStorage.jpg';
import mmStorage2 from '../images/M&MStorage2.jpg';
import mmStorage3 from '../images/M&MStorage3.jpg';
import mequityStorage from '../images/MequityStorage.jpg';
import mequityStorage2 from '../images/MequityStorage2.jpg';
import miamiBeachFifth from '../images/MiamiBeachFifth&Alton.jpg';
import miamiSeniorHigh from '../images/MiamiSeniorHighschool.jpg';
import montessoryAcademy from '../images/MontessoryAcademy.jpg';
import montessoryAcademy2 from '../images/MontessoryAcademy2.jpg';
import profOfficeBuilding from '../images/ProfessionalOfficeBuilding2.jpg';
import profOfficeBuilding2 from '../images/ProfessionalOfficeBuilding.jpg';
import rossEastHialeah from '../images/RossEastHialeah.jpg';
import rossEastHialeah2 from '../images/RossEastHialeah2.jpg';
import rossMillerSquare from '../images/RossMillerSquare.jpg';
import rossMillerSquare2 from '../images/RossMillerSquare (2).jpg';
import urbanStorage from '../images/UrbanStorage.jpg';
import vinelandCenter from '../images/VinelandCenter.jpg';

const publicProjects = [
    {
        id: 2,
        name: '221 Le June Office Building',
        image: [leJune, leJune2]
    },
    {
        id: 8,
        name: 'Chevrolet',
        image: [chevrolet, chevrolet2]
    },
    {
        id: 10,
        name: 'Cube Smart Storage',
        image: [cubeSmart, cubeSmart2]
    },
    {
        id: 11,
        name: 'Cutler Bay Middle School',
        image: [cutlerBayMiddle]
    },
    {
        id: 12,
        name: 'Cypress Village Shopping Center',
        image: [cypressVillage, cypressVillage2]
    },
    {
        id: 14,
        name: 'Doral Storage',
        image: [doralStorage, doralStorage2, doralStorage3]
    },
    {
        id: 15,
        name: 'East Coast Storage',
        image: [eastCoastStorage, eastCoastStorage2]
    },
    {
        id: 16,
        name: 'Flamingo Plaza',
        image: [flamingoPlaza, flamingoPlaza2]
    },
    {
        id: 18,
        name: 'Fort Lauderdale Storage',
        image: [fortLaudyStorage, fortLaudyStorage2]
    },
    {
        id: 19,
        name: 'Gable Edge Storage',
        image: [gableEdgeStorage2, gableEdgeStorage]
    },
    {
        id: 24,
        name: 'Kendall 124',
        image: [kendall124, kendall1242]
    },
    {
        id: 25,
        name: 'Lancaster Plaza',
        image: [lancasterPlaza, lancasterPlaza2]
    },
    {
        id: 28,
        name: 'M&M Storage',
        image: [mmStorage, mmStorage2, mmStorage3]
    },
    {
        id: 31, 
        name: 'Mequity Storage',
        image: [mequityStorage, mequityStorage2]
    },
    {
        id: 32,
        name: 'Miami Beach Fifth & Alton',
        image: [miamiBeachFifth]
    },
    {
        id: 34,
        name: 'Miami Senior Highschool',
        image: [miamiSeniorHigh]
    },
    {
        id: 35, 
        name: 'Montessory Academy',
        image: [montessoryAcademy, montessoryAcademy2]
    },
    {
        id: 38,
        name: 'Professional Office Building',
        image: [profOfficeBuilding, profOfficeBuilding2]
    },
    {
        id: 41,
        name: 'Ross - East Hialeah',
        image: [rossEastHialeah, rossEastHialeah2]
    },
    {
        id: 42,
        name: 'Ross - Miller Square',
        image: [rossMillerSquare, rossMillerSquare2]
    },
    {
        id: 48,
        name: 'Urban Storage',
        image: [urbanStorage]
    },
    {
        id: 51,
        name: 'Vineland K-8 Center',
        image: [vinelandCenter]
    }
  ]


const PublicProjects = props => {
    const [show, setShow] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

    const openModal = (index) => {
        handleChanges(index);
    }

    const handleChanges = (index) => {
        // 1. Make a shallow copy of the items
        let items = [show];
        // 2. Make a shallow copy of the item you want to mutate
        let item = items[index];
        // 3. Replace the property you're intested in
        item = true;
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        items[index] = item;
        // 5. Set the state to our new copy
        setShow(items);
    }

    const closeModal = () => {
        setShow([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    }

    return (
        <div className='projectContainer'>
            {publicProjects.map((project, index) => (
                <div className='lightbox' onClick={() => {openModal(index)}}>
                    <div className='project'>
                        <h5>{project.name}</h5>
                        <img src={project.image[0]} alt='hibiscus project' />
                    </div>
                    <div onClick={(e) => {e.stopPropagation()}}>
                        <MyModal title={project.name} img={project.image} show={show[index]} onHide={closeModal}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PublicProjects;