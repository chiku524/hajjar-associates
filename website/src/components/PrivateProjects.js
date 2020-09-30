import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import MyModal from './MyModal';
import 'react-image-lightbox/style.css'; 
import hibiscus from '../images/38HibiscusIsland.jpg';
import hibiscus2 from '../images/38HibiscusIsland2.jpg';
import hibiscus3 from '../images/38HibiscusIsland3.jpg';
import blue401 from '../images/401Blue2.jpg';
import blue4012 from '../images/401Blue.jpg';
import arlenHouse from '../images/ArlenHouseCondominiums.jpg';
import bayHarbor from '../images/BayHarborResidences.jpg';
import berkeleyHotel from '../images/BerkeleyHotel3.jpg';
import berkeleyHotel2 from '../images/BerkeleyHotel.jpg';
import berkeleyHotel3 from '../images/BerkeleyHotel2.jpg';
import breezeCondo from '../images/BreezeCondominium2.jpg';
import breezeCondo2 from '../images/BreezeCondominium.jpg';
import colonnade from '../images/Colonnade2.jpg';
import colonnade2 from '../images/Colonnade.jpg';
import dolceVitta from '../images/DolceVittaTownhouses.jpg';
import dolceVitta2 from '../images/DolceVittaTownhouses2.jpg';
import forgeLofts from '../images/ForgeLofts.jpg';
import forgeLofts2 from '../images/ForgeLofts2.jpg';
import forgeLofts3 from '../images/ForgeLofts3.jpg';
import galianoCondo from '../images/GalianoCondominium.jpg';
import galianoCondo2 from '../images/GalianoCondominium2.jpg';
import galianoCondo3 from '../images/GalianoCondominium3.jpg';
import guilfordHouseCondo from '../images/GuilfordHouseCondominiums.jpg';
import guilfordHouseCondo2 from '../images/GuilfordHouseCondominiums (2).jpg';
import hajjarhouse from '../images/HajjarHouse.jpg';
import hajjarhouse2 from '../images/HajjarHouse2.jpg';
import hajjarhouse3 from '../images/HajjarHouse3.jpg';
import kedneySpa from '../images/KedneySpa.jpg';
import lancasterPlaza from '../images/LancasterPlaza.jpg';
import lancasterPlaza2 from '../images/LancasterPlaza2.jpg';
import ludlamResidence from '../images/LudlamResidence.jpg';
import ludlamResidence2 from '../images/LudlamResidence2.jpg';
import ludlamResidence3 from '../images/LudlamResidence3.jpg';
import luxuryOceanFrontCondo from '../images/LuxuryOceanfrontCondominiums.jpg';
import malaga from '../images/Malaga.jpg';
import malaga2 from '../images/Malaga2.jpg';
import marDelPlata from '../images/MarDelPlata.jpg';
import marDelPlata2 from '../images/MarDelPlata2.jpg';
import miamiRiverTower from '../images/MiamiRiverTower.jpg';
import miamiRiverTower2 from '../images/MiamiRiverTower2.jpg';
import oceanFive from '../images/OceanFive.jpg';
import oceanFive2 from '../images/OceanFive2.jpg';
import ponceTower from '../images/PonceTower.jpg';
import ponceTower2 from '../images/PonceTower2.jpg';
import redburyHotel from '../images/RedburyHotel2.jpg';
import redburyHotel2 from '../images/RedburyHotel.jpg';
import redburyHotel3 from '../images/RedburyHotel3.jpg';
import riversideResidences from '../images/RiversideResidences.jpg';
import riversideResidences2 from '../images/RiversideResidences2.jpg';
import sheratonHotel from '../images/SheratonHotel.jpg';
import sheratonHotel2 from '../images/SheratonHotel2.jpg';
import southBeachHotel from '../images/SouthbeachHotel.jpg';
import southBeachHotel2 from '../images/SouthbeachHotel (2).jpg';
import southBeachHotel3 from '../images/SouthbeachHotel3.jpg';
import transFloridaHQ from '../images/TransFloridaHeadquarters.jpg';
import treasureOnTheBayCondo from '../images/TreasureOnTheBayCondominiums.jpg';
import treasureOnTheBayCondo2 from '../images/TreasureOnTheBayCondominiums2.jpg';
import treasureOnTheBayCondo3 from '../images/TreasureOnTheBayCondominiums3.jpg';
import urbanClub from '../images/UrbanClub.jpg';
import urbanClub2 from '../images/UrbanClub2.jpg';
import villaFlorini from '../images/VillaFlorini.jpg';
import villaFlorini2 from '../images/VillaFlorini2.jpg';
import villaPatricia from '../images/VillaPatricia2.jpg';
import villaPatricia2 from '../images/VillaPatricia.jpg';
import vodaI from '../images/VodaI2.jpg';
import vodaI2 from '../images/VodaI.jpg';
import vodaI3 from '../images/VodaI3.jpg';
import vodaII from '../images/VodaIIResidences.jpg';
import vodaII2 from '../images/VodaIIResidences2.jpg';
import wilshireCondo from '../images/WilshireCondominiums.jpg';
import wilshireCondo2 from '../images/WilshireCondominiums2.jpg';

const privateProjects = [
    {
        id: 0,
        name: '38 Hibiscus Island',
        image: [hibiscus, hibiscus2, hibiscus3]
    },
    {
        id: 1, 
        name: '401 Blue',
        image: [blue401, blue4012]
    },
    {
        id: 2,
        name: 'Arlen House Condominiums',
        image: [arlenHouse]
    },
    {
        id: 3,
        name: 'Bay Harbor Residences',
        image: [bayHarbor]
    },
    {
        id: 4, 
        name: 'Berkeley Hotel',
        image: [berkeleyHotel, berkeleyHotel2, berkeleyHotel3]
    },
    {
        id: 5, 
        name: 'Breeze Condominium',
        image: [breezeCondo, breezeCondo2]
    },
    {
        id: 6,
        name: 'Colonnade',
        image: [colonnade, colonnade2]
    },
    {
        id: 7,
        name: 'Dolce Vitta Townhouses',
        image: [dolceVitta, dolceVitta2]
    },
    {
        id: 8,
        name: 'Forge Lofts',
        image: [forgeLofts, forgeLofts2, forgeLofts3]
    },
    {
        id: 9,
        name: 'Galiano Condominium',
        image: [galianoCondo, galianoCondo2, galianoCondo3]
    },
    {
        id: 10,
        name: 'Guilford House Condominium',
        image: [guilfordHouseCondo, guilfordHouseCondo2]
    },
    {
        id: 11,
        name: 'Hajjar House',
        image: [hajjarhouse, hajjarhouse2, hajjarhouse3]
    },
    {
        id: 12, 
        name: 'Kedney Spa',
        image: [kedneySpa]
    },
    {
        id: 13,
        name: 'Lancaster Plaza',
        image: [lancasterPlaza, lancasterPlaza2]
    },
    {
        id: 14,
        name: 'Ludlam Residence',
        image: [ludlamResidence, ludlamResidence2, ludlamResidence3]
    },
    {
        id: 15, 
        name: 'Luxury Oceanfront Condominium',
        image: [luxuryOceanFrontCondo]
    },
    {
        id: 16,
        name: 'Malaga',
        image: [malaga, malaga2]
    },
    {
        id: 17,
        name: 'Mar Del Plata',
        image: [marDelPlata, marDelPlata2]
    },
    {
        id: 18, 
        name: 'Miami River Tower',
        image: [miamiRiverTower, miamiRiverTower2]
    },
    {
        id: 19,
        name: 'Ocean Five',
        image: [oceanFive, oceanFive2]
    },
    {
        id: 20,
        name: 'Ponce Tower',
        image: [ponceTower, ponceTower2]
    },
    {
        id: 21, 
        name: 'Redbury Hotel',
        image: [redburyHotel, redburyHotel2, redburyHotel3]
    },
    {
        id: 22,
        name: 'Riverside Residences',
        image: [riversideResidences, riversideResidences2]
    },
    {
        id: 23,
        name: 'Sheraton Hotel',
        image: [sheratonHotel, sheratonHotel2]
    },
    {
        id: 24,
        name: 'South Beach Hotel',
        image: [southBeachHotel, southBeachHotel2, southBeachHotel3]
    },
    {
        id: 25,
        name: 'Trans Florida Headquarters',
        image: [transFloridaHQ]
    },
    {
        id: 26, 
        name: 'Treasure On The Bay Condominium',
        image: [treasureOnTheBayCondo, treasureOnTheBayCondo2, treasureOnTheBayCondo3]
    },
    {
        id: 27, 
        name: 'Urban Club',
        image: [urbanClub, urbanClub2]
    },
    {
        id: 28, 
        name: 'Villa Florini',
        image: [villaFlorini, villaFlorini2]
    },
    {
        id: 29, 
        name: 'Villa Patricia',
        image: [villaPatricia, villaPatricia2]
    },
    {
        id: 30,
        name: 'Voda I Residences',
        image: [vodaI, vodaI2, vodaI3]
    },
    {
        id: 31, 
        name: 'Voda II Residences',
        image: [vodaII, vodaII2]
    },
    {
        id: 32,
        name: 'Wilshire Condominiums',
        image: [wilshireCondo, wilshireCondo2]
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

export default PrivateProjects;