import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import MyModal from './MyModal';
import 'react-image-lightbox/style.css'; 
import hibiscus from '../images/38HibiscusIsland.jpg';
import hibiscus2 from '../images/38HibiscusIsland2.jpg';
import blue401 from '../images/401Blue2.jpg';
import arlenHouse from '../images/ArlenHouseCondominiums.jpg';
import bayHarbor from '../images/BayHarborResidences.jpg';
import berkeleyHotel from '../images/BerkeleyHotel3.jpg';
import breezeCondo from '../images/BreezeCondominium2.jpg';
import colonnade from '../images/Colonnade2.jpg';
import dolceVitta from '../images/DolceVittaTownhouses.jpg';
import forgeLofts from '../images/ForgeLofts.jpg';
import galianoCondo from '../images/GalianoCondominium.jpg';
import guilfordHouseCondo from '../images/GuilfordHouseCondominiums.jpg';
import hajjarhouse from '../images/HajjarHouse.jpg';
import kedneySpa from '../images/KedneySpa.jpg';
import lancasterPlaza from '../images/LancasterPlaza.jpg';
import ludlamResidence from '../images/LudlamResidence.jpg';
import luxuryOceanFrontCondo from '../images/LuxuryOceanfrontCondominiums.jpg';
import malaga from '../images/Malaga.jpg';
import marDelPlata from '../images/MarDelPlata.jpg';
import miamiRiverTower from '../images/MiamiRiverTower.jpg';
import oceanFive from '../images/OceanFive.jpg';
import ponceTower from '../images/PonceTower.jpg';
import redburyHotel from '../images/RedburyHotel2.jpg';
import riversideResidences from '../images/RiversideResidences.jpg';
import sheratonHotel from '../images/SheratonHotel.jpg';
import southBeachHotel from '../images/SouthbeachHotel.jpg';
import transFloridaHQ from '../images/TransFloridaHeadquarters.jpg';
import treasureOnTheBarCondo from '../images/TreasureOnTheBayCondominiums.jpg';
import urbanClub from '../images/UrbanClub.jpg';
import villaFlorini from '../images/VillaFlorini.jpg';
import villaPatricia from '../images/VillaPatricia2.jpg';
import vodaI from '../images/VodaI2.jpg';
import vodaII from '../images/VodaIIResidences.jpg';
import wilshireCondo from '../images/WilshireCondominiums.jpg';

const privateProjects = [
    {
        id: 0,
        name: '38 Hibiscus Island',
        image: hibiscus
    },
    {
        id: 1, 
        name: '401 Blue',
        image: blue401
    },
    {
        id: 2,
        name: 'Arlen House Condominiums',
        image: arlenHouse
    },
    {
        id: 3,
        name: 'Bay Harbor Residences',
        image: bayHarbor
    },
    {
        id: 4, 
        name: 'Berkeley Hotel',
        image: berkeleyHotel
    },
    {
        id: 5, 
        name: 'Breeze Condominium',
        image: breezeCondo
    },
    {
        id: 6,
        name: 'Colonnade',
        image: colonnade
    },
    {
        id: 7,
        name: 'Dolce Vitta Townhouses',
        image: dolceVitta
    },
    {
        id: 8,
        name: 'Forge Lofts',
        image: forgeLofts
    },
    {
        id: 9,
        name: 'Galiano Condominium',
        image: galianoCondo
    },
    {
        id: 10,
        name: 'Guilford House Condominium',
        image: guilfordHouseCondo
    },
    {
        id: 11,
        name: 'Hajjar House',
        image: hajjarhouse
    },
    {
        id: 12, 
        name: 'Kedney Spa',
        image: kedneySpa
    },
    {
        id: 13,
        name: 'Lancaster Plaza',
        image: lancasterPlaza
    },
    {
        id: 14,
        name: 'Ludlam Residence',
        image: ludlamResidence
    },
    {
        id: 15, 
        name: 'Luxury Oceanfront Condominium',
        image: luxuryOceanFrontCondo
    },
    {
        id: 16,
        name: 'Malaga',
        image: malaga
    },
    {
        id: 17,
        name: 'Mar Del Plata',
        image: marDelPlata
    },
    {
        id: 18, 
        name: 'Miami River Tower',
        image: miamiRiverTower
    },
    {
        id: 19,
        name: 'Ocean Five',
        image: oceanFive
    },
    {
        id: 20,
        name: 'Ponce Tower',
        image: ponceTower
    },
    {
        id: 21, 
        name: 'Redbury Hotel',
        image: redburyHotel
    },
    {
        id: 22,
        name: 'Riverside Residences',
        image: riversideResidences
    },
    {
        id: 23,
        name: 'Sheraton Hotel',
        image: sheratonHotel
    },
    {
        id: 24,
        name: 'South Beach Hotel',
        image: southBeachHotel
    },
    {
        id: 25,
        name: 'Trans Florida Headquarters',
        image: transFloridaHQ
    },
    {
        id: 26, 
        name: 'Treasure On The Bar Condominium',
        image: treasureOnTheBarCondo
    },
    {
        id: 27, 
        name: 'Urban Club',
        image: urbanClub
    },
    {
        id: 28, 
        name: 'Villa Florini',
        image: villaFlorini
    },
    {
        id: 29, 
        name: 'Villa Patricia',
        image: villaPatricia
    },
    {
        id: 30,
        name: 'Voda I Residences',
        image: vodaI
    },
    {
        id: 31, 
        name: 'Voda II Residences',
        image: vodaII
    },
    {
        id: 32,
        name: 'Wilshire Condominiums',
        image: wilshireCondo
    }
  ]

const PrivateProjects = props => {
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
            {privateProjects.map((project, index) => (
                <div className='lightbox' onClick={() => {openModal(index)}}>
                    <div className='project'>
                        <h5>{project.name}</h5>
                        <img src={project.image} alt='hibiscus project' />
                    </div>
                    <div onClick={(e) => {e.stopPropagation()}}>
                        <MyModal title={project.name} img={project.image} show={show[index]} onHide={closeModal}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PrivateProjects;