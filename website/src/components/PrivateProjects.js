import React from 'react';
import hibiscus from '../images/38HibiscusIsland.jpg';
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
        id: 1,
        name: '38 Hibiscus Island',
        image: hibiscus
    },
    {
        id: 3, 
        name: '401 Blue',
        image: blue401
    },
    {
        id: 4,
        name: 'Arlen House Condominiums',
        image: arlenHouse
    },
    {
        id: 5,
        name: 'Bay Harbor Residences',
        image: bayHarbor
    },
    {
        id: 6, 
        name: 'Berkeley Hotel',
        image: berkeleyHotel
    },
    {
        id: 7, 
        name: 'Breeze Condominium',
        image: breezeCondo
    },
    {
        id: 9,
        name: 'Colonnade',
        image: colonnade
    },
    {
        id: 13,
        name: 'Dolce Vitta Townhouses',
        image: dolceVitta
    },
    {
        id: 17,
        name: 'Forge Lofts',
        image: forgeLofts
    },
    {
        id: 20,
        name: 'Galiano Condominium',
        image: galianoCondo
    },
    {
        id: 21,
        name: 'Guilford House Condominium',
        image: guilfordHouseCondo
    },
    {
        id: 22,
        name: 'Hajjar House',
        image: hajjarhouse
    },
    {
        id: 23, 
        name: 'Kedney Spa',
        image: kedneySpa
    },
    {
        id: 25,
        name: 'Lancaster Plaza',
        image: lancasterPlaza
    },
    {
        id: 26,
        name: 'Ludlam Residence',
        image: ludlamResidence
    },
    {
        id: 27, 
        name: 'Luxury Oceanfront Condominium',
        image: luxuryOceanFrontCondo
    },
    {
        id: 29,
        name: 'Malaga',
        image: malaga
    },
    {
        id: 30,
        name: 'Mar Del Plata',
        image: marDelPlata
    },
    {
        id: 33, 
        name: 'Miami River Tower',
        image: miamiRiverTower
    },
    {
        id: 36,
        name: 'Ocean Five',
        image: oceanFive
    },
    {
        id: 37,
        name: 'Ponce Tower',
        image: ponceTower
    },
    {
        id: 39, 
        name: 'Redbury Hotel',
        image: redburyHotel
    },
    {
        id: 40,
        name: 'Riverside Residences',
        image: riversideResidences
    },
    {
        id: 43,
        name: 'Sheraton Hotel',
        image: sheratonHotel
    },
    {
        id: 44,
        name: 'South Beach Hotel',
        image: southBeachHotel
    },
    {
        id: 45,
        name: 'Trans Florida Headquarters',
        image: transFloridaHQ
    },
    {
        id: 46, 
        name: 'Treasure On The Bar Condominium',
        image: treasureOnTheBarCondo
    },
    {
        id: 47, 
        name: 'Urban Club',
        image: urbanClub
    },
    {
        id: 49, 
        name: 'Villa Florini',
        image: villaFlorini
    },
    {
        id: 50, 
        name: 'Villa Patricia',
        image: villaPatricia
    },
    {
        id: 52,
        name: 'Voda I Residences',
        image: vodaI
    },
    {
        id: 53, 
        name: 'Voda II Residences',
        image: vodaII
    },
    {
        id: 54,
        name: 'Wilshire Condominiums',
        image: wilshireCondo
    }
  ]


const PrivateProjects = props => {

    return (
        <div className='projectContainer'>
            {privateProjects.map(project => (
                <div className='project'>
                    <h5>{project.name}</h5>
                    <img src={project.image} alt='hibiscus project' />
                </div>
            ))}
        </div>
    )
}

export default PrivateProjects;