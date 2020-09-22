import React from 'react';
import leJune from '../images/221LeJuneOfficeBuilding2.jpg';
import chevrolet from '../images/Chevrolet (2).jpg';
import cubeSmart from '../images/CubeSmartStorage.jpg';
import cutlerBayMiddle from '../images/cutlerBayMiddle.jpg';
import cypressVillage from '../images/CypressVillageShoppingCenter.jpg';
import doralStorage from '../images/DoralStorage.jpg';
import eastCoastStorage from '../images/EastCoastStorage.jpg';
import flamingoPlaza from '../images/FlamingoPlaza.jpg';
import fortLaudyStorage from '../images/FortLauderdaleStorage.jpg';
import gableEdgeStorage from '../images/GableEdgeStorage.jpg';
import kendall124 from '../images/Kendall124.jpg';
import lancasterPlaza from '../images/LancasterPlaza.jpg';
import mmStorage from '../images/M&MStorage.jpg';
import mequityStorage from '../images/MequityStorage.jpg';
import miamiBeachFifth from '../images/MiamiBeachFifth&Alton.jpg';
import miamiSeniorHigh from '../images/MiamiSeniorHighschool.jpg';
import montessoryAcademy from '../images/MontessoryAcademy.jpg';
import profOfficeBuilding from '../images/ProfessionalOfficeBuilding2.jpg';
import rossEastHialeah from '../images/RossEastHialeah.jpg';
import rossMillerSquare from '../images/RossMillerSquare.jpg';
import urbanStorage from '../images/UrbanStorage.jpg';
import vinelandCenter from '../images/VinelandCenter.jpg';

const publicProjects = [
    {
        id: 2,
        name: '221 Le June Office Building',
        image: leJune
    },
    {
        id: 8,
        name: 'Chevrolet',
        image: chevrolet
    },
    {
        id: 10,
        name: 'Cube Smart Storage',
        image: cubeSmart
    },
    {
        id: 11,
        name: 'Cutler Bay Middle School',
        image: cutlerBayMiddle
    },
    {
        id: 12,
        name: 'Cypress Village Shopping Center',
        image: cypressVillage
    },
    {
        id: 14,
        name: 'Doral Storage',
        image: doralStorage
    },
    {
        id: 15,
        name: 'East Coast Storage',
        image: eastCoastStorage
    },
    {
        id: 16,
        name: 'Flamingo Plaza',
        image: flamingoPlaza
    },
    {
        id: 18,
        name: 'Fort Lauderdale Storage',
        image: fortLaudyStorage
    },
    {
        id: 19,
        name: 'Gable Edge Storage',
        image: gableEdgeStorage
    },
    {
        id: 24,
        name: 'Kendall 124',
        image: kendall124
    },
    {
        id: 25,
        name: 'Lancaster Plaza',
        image: lancasterPlaza
    },
    {
        id: 28,
        name: 'M&M Storage',
        image: mmStorage
    },
    {
        id: 31, 
        name: 'Mequity Storage',
        image: mequityStorage
    },
    {
        id: 32,
        name: 'Miami Beach Fifth & Alton',
        image: miamiBeachFifth
    },
    {
        id: 34,
        name: 'Miami Senior Highschool',
        image: miamiSeniorHigh
    },
    {
        id: 35, 
        name: 'Montessory Academy',
        image: montessoryAcademy
    },
    {
        id: 38,
        name: 'Professional Office Building',
        image: profOfficeBuilding
    },
    {
        id: 41,
        name: 'Ross - East Hialeah',
        image: rossEastHialeah
    },
    {
        id: 42,
        name: 'Ross - Miller Square',
        image: rossMillerSquare
    },
    {
        id: 48,
        name: 'Urban Storage',
        image: urbanStorage
    },
    {
        id: 51,
        name: 'Vineland K-8 Center',
        image: vinelandCenter
    }
  ]


const PublicProjects = props => {

    return (
        <div className='projectContainer'>
            {publicProjects.map(project => (
                <div className='project'>
                    <h5>{project.name}</h5>
                    <img src={project.image} alt='hibiscus project' />
                </div>
            ))}
        </div>
    )
}

export default PublicProjects;