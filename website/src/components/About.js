import React from 'react';

const About = () => {
    return (
        <div className='aboutContainer'>
            <div className='contentContainer'>
                <div className='content'>
                    <h1>About Us</h1>
                    <p>M. HAJJAR & ASSOCIATES, INC. (MHA) is a unique collective of talents, expertise, proven success, and mutual experience. The executives leading MHA, in both past projects individually and often times together, have been an integral part of some of the signature hospitality, resort development, commercial, high rise residential, corporate offices, and governmental contracting projects of recent years.</p>
                    <p>With projects ranging from updates and renovations to the development of full scale mega projects valued in multi-billions of U.S. dollars, a diverse set of talents and skills have frequently collaborated to demonstrate the awesome power of an efficient, cohesive team and their extraordinary results. MHA’s executives have previously participated in all phases of project development from site evaluation and due diligence, to final construction and installation of projects throughout the United States, the Middle East and the Caribbean.</p>
                    <p>The individual expertise of various MHA executives complements one another to produce a truly unique team ready to assist you in realizing your dream. Some of notable aspects of MHA engineering and consulting experience include structural, civil, mechanical, electrical, HVAC and plumbing engineering, as well as water proofing consulting, value engineering and other onsite inspections. From executive management to field personnel, MHA’s staff knows what it takes to complete a successful project. This is the result of working together, within numerous teams, for many years. With many years of diverse experience and knowledge backing MHA’s project commitments, the right formula for taking on the most complex projects all across the globe has been ensured for our clients under one corporate entity, MHA.</p>
                </div>
            </div>
            <div className='statsContainer'>
                <div className='stats'>
                    <div className='stat'>
                        <p className='number'>1990</p>
                        <p className='description'>Year Published</p>
                    </div>
                    <div className='stat'>
                        <p className='number'>100 +</p>
                        <p className='description'>Projects Completed</p>
                    </div>
                    <div className='stat'>
                        <p className='number'>4</p>
                        <p className='description'>Registered Licensed States</p>
                    </div>
                    <div className='stat'>
                        <p className='number'>5+</p>
                        <p className='description'>Areas of Expertise</p>
                    </div>
                </div>
            </div>
            <div className='teamContainer'>
                <h2>Our team</h2>
                <div className='team'>
                    <div className='level1'>
                        <h4>Level 1</h4>
                        <div className='bigboss'>
                            <h5>Principal / Owner</h5>
                            <h5>Mohammad Hajjar</h5>
                            <p>P.E. in Strucural Engineering</p>
                            <p>Owner of MHA</p>
                        </div>
                    </div>
                    <div className='level2'>
                        <div className='pm'>
                            <h5>Project Manager</h5>
                            <h5>Alireza Shirvani</h5>
                        </div>
                        <div className='architect'>
                            <h5>Architects</h5>
                            <div className='people'>
                                <div className='person'>
                                    <h5>Luis Patrolie</h5>
                                    <p>R.A.</p>
                                </div>
                                <div className='person'>
                                    <h5>Andres Diaz</h5>
                                    <p>R.A.</p>
                                </div>
                            </div>
                        </div>
                        <div className='civil'>
                            <div className='person'>
                                <h5>Jorge Canales</h5>
                                <p>P.E. in Civil Engineering</p>
                            </div>
                        </div>
                    </div>
                    <div className='level3'>
                        <div className='drafting'>
                            <div className='structural'>
                                <h5>Structural Engineers</h5>
                                <div className='people'>
                                    <div className='person'>
                                        <h5>Dunia Escobar</h5>
                                    </div>
                                    <div className='person'>
                                        <h5>Yuly</h5>
                                    </div>
                                    <div className='person'>
                                        <h5>Hossein</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='inspector'>
                                <h5>Inspector</h5>
                                <h5>Mike Shojaie</h5>
                            </div>
                            <div className='architectural'>
                                <h5>Architectural Engineer</h5>
                                <div className='person'>
                                    <h5>Karina Trespalacios</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='level4'>
                        <div className='admin'>
                            <div className='accounting'>
                                <h5>Accounting / Admin</h5>
                                <div className='person'>
                                    <h5>Saman Hajjar</h5>
                                </div>
                            </div>
                            <div className='administration'>
                                <h5>Admin</h5>
                                <div className='person'>
                                    <h5>Rosanib Bautista</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;