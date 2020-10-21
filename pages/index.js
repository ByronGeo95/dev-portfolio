import Styling from '../components/Styling.js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faUniversity, faQuestion, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

export default () => (
    <div>
        <Styling>


                <Row>
                    <Col md={4} >
                        <h3 style={{ marginBottom: '1.5px', marginTop: '1.5px' }} > <FontAwesomeIcon icon={faUser} /> <b> BYRON GEORGOPOULOS </b> </h3>
                        <hr style={{ backgroundColor: 'black', marginTop: '0px', padding: '1px' }} ></hr>
                        <Image src='static/images/profilePhoto.jpg' style={{ width: '50%', borderRadius: '50%', marginTop: '10px', marginBottom: '10px' }} />
                        <hr style={{ backgroundColor: 'black', padding: '1px', marginBottom: '1.5px' }} ></hr>
                        <h3 style={{ marginBottom: '0px' }} > <FontAwesomeIcon icon={faCode} /> <b>FULL-STACK WEB DEVELOPER</b></h3>
                        <hr style={{ backgroundColor: 'black', padding: '1px', marginTop: '1.5px', marginBottom: '0px' }} ></hr>
                            <Row style={{ marginTop: '40px' }} >
                                <Col md={1} >
                                    <FontAwesomeIcon style={{ fontSize: '25px', color: '#f06529', float: 'left', marginLeft: '2px' }} icon={faHtml5} />
                                </Col>
                                <Col md={3} >
                                    <h6 style={{ marginTop: '3px', fontSize: '15px', textAlign: 'right', float: 'right' }} > <b>HTML5</b> </h6>
                                </Col>
                                <Col md={8} >
                                    <ProgressBar style={{ height: '12.5px', marginTop: '6px' }} variant='dark' now={90} label='90%' />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col md={1} >
                                    <FontAwesomeIcon style={{ fontSize: '25px', color: '#264de4', float: 'left', marginLeft: '2px' }} icon={faCss3Alt} />
                                </Col>
                                <Col md={3} >
                                   <h6 style={{ marginTop: '3px', fontSize: '15px', textAlign: 'right', float: 'right' }} > <b>CSS3</b> </h6>
                                </Col>
                                <Col md={8} >
                                    <ProgressBar style={{ height: '12.5px', marginTop: '7.5px' }} variant='dark' now={85} label='85%' />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col md={1} >
                                    <FontAwesomeIcon style={{ fontSize: '25px', color: '#f0db4f', float: 'left', marginLeft: '2px' }} icon={faJs} />
                                </Col>
                                <Col md={3} >
                                    <h6 style={{ marginTop: '3px', fontSize: '15px', textAlign: 'right', float: 'right' }} > <b>JavaScript</b> </h6>
                                </Col>
                                <Col md={8} >
                                    <ProgressBar style={{ height: '12.5px', marginTop: '7.5px' }} variant='dark' now={90} label='90%' />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col md={1} >
                                    <FontAwesomeIcon style={{ fontSize: '25px', color: '#589636', float: 'left', marginLeft: '2px' }} icon={faDatabase} />
                                </Col>
                                <Col md={3} >
                                     <h6 style={{ marginTop: '3px', fontSize: '15px', textAlign: 'right', float: 'right' }} > <b>MongoDB</b> </h6>
                                </Col>
                                <Col md={8} >
                                    <ProgressBar style={{ height: '12.5px', marginTop: '7.5px' }} variant='dark' now={75} label='75%' />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col md={1} >
                                    <FontAwesomeIcon style={{ fontSize: '25px', color: '#61DBFB', float: 'left', marginLeft: '2px' }} icon={faReact} />
                                </Col>
                                <Col md={3} >
                                    <h6 style={{ marginTop: '3px', fontSize: '15px', textAlign: 'right', float: 'right' }} > <b>React</b> </h6>
                                </Col>
                                <Col md={8} >
                                    <ProgressBar style={{ height: '12.5px', marginTop: '7.5px' }} variant='dark' now={90} label='90%' />
                                </Col>
                            </Row>
                            <br></br>
                            <Row style={{ marginBottom: '40px' }} >
                                <Col md={1} >
                                    <FontAwesomeIcon style={{ fontSize: '25px', color: '#303030', float: 'left', marginLeft: '2px' }} icon={faNodeJs} />
                                </Col>
                                <Col md={3} >
                                    <h6 style={{ marginTop: '3px', fontSize: '15px', textAlign: 'right', float: 'right' }} > <b>NODE.js</b> </h6>
                                </Col>
                                <Col md={8} >
                                    <ProgressBar style={{ height: '12.5px', marginTop: '7.5px' }} variant='dark' now={75} label='75%' />
                                </Col>
                            </Row>
                    </Col>
                    <Col md={8}>
                        <h3 style={{ marginBottom: '1.5px', marginTop: '1.5px' }} > <FontAwesomeIcon icon={faQuestion} /> <b> ABOUT </b> </h3>
                        <hr style={{ backgroundColor: 'black', marginTop: '0px', marginBottom: '0px', padding: '1px' }} ></hr>
                        <br></br>
                        <Row>
                        <Col>
                        <h6 style={{ float: 'left', textAlign: 'left', marginTop: '15px' }} >
                            I am a 25-year-old student living in Johannesburg, South Africa. I attended SAHETI School from Grade R to Grade 12, where I obtained my IEB Matric Certificate.
                            I completed my Bachelor of Arts undergraduate degree from the University of the Witwatersrand in 2017, majoring in Political Sciences and English.
                            In 2018, I pursued a post-graduate Bachelor of Laws (LLB) degree from the University of the Witwatersrand, but came to the conclusion that my passions, skills,
                            & proficiencies were better suited elsewhere. In 2020, I made a huge leap, from the law and liberal arts to the IT Sector, focusing on Web Development
                            at <a href='https://www.hyperiondev.com/' target='_blank' > <FontAwesomeIcon icon={faCode} /> HyperionDev</a>. Such an immense academic change was daunting at
                            first, but I soon felt at home learning about Full-Stack Web Development, especially at an institution as streamline & immersive as HyperionDev.
                            Currently, as I'm finishing off my Full-Stack Web Development Bootcamp at HyperionDev, I am pursuing a diploma in Core Concepts in Digital Business from the University 
                            of the Witwatersrand Business School. The diploma offers six courses, with each course focusing on a different aspect of Core Concepts in Digital Business. The diploma
                            will equip me with the knowledge & understanding of managment principles & frameworks in a ever-changing and ever-growing digital economy, as well as their relevance in 
                            a South African & global contect. The diploma will teach me valuable digital business managment competencies, ensuring effective contribution to the digital managment
                            system in the Fourth Industrial Revolution that is currently taking place.
                        </h6>
                        </Col>
                        </Row>
                        <br></br>
                        <hr style={{ backgroundColor: 'black', marginTop: '13.5px', marginBottom: '0px', padding: '1px' }} ></hr>
                        <h3 style={{ marginBottom: '1.5px', marginTop: '1.5px' }} > <FontAwesomeIcon icon={faUniversity} /> <b> EDUCATION </b> </h3>
                        <hr style={{ backgroundColor: 'black', marginTop: '0px', marginBottom: '0px' , padding: '1px' }} ></hr>
                        <br></br>
                        <Row>
                        <Col>
                        <h6 style={{ marginBottom: '0px', float: 'left', textAlign: 'left' }} ><b>1 : UNIVERSITY OF THE WITWATERSRAND (2014-2017):</b></h6>
                        <h6 style={{ float: 'left', textAlign: 'left' }} ><b>Bachelor of Arts (Completed):</b></h6>
                        <h6 style={{ float: 'left', textAlign: 'left' }} >
                        I obtained a Bachelor of Arts degree from Wits, majoring in Political Sciences and English. I have a passion for the arts, especially with
                        regards to English Literature, and still read copiously in my spare-time. I found the degree to be interesting, rewarding, and stimulating. 
                        This is because we discussed and debated various neoliberal topics, but also maintained a focus on classic schools of thought & debate.
                        </h6>
                        </Col>
                        <Col>
                        <h6 style={{ marginBottom: '0px', float: 'left', textAlign: 'left' }} ><b>3 : HYPERIONDEV (2020):</b></h6>
                        <h6 style={{ float: 'left', textAlign: 'left' }} ><b>Full-Stack Web Development (Currently Pursuing):</b></h6>
                        <h6 style={{ float: 'left', textAlign: 'left' }}>
                        The Full-Stack Web Development Bootcamp at HyperionDev is a 3-month, hands-on, and practical course that prepares you for all aspects of Web
                        Development. The course provides you with all the tools needed to plan, design, code, test, and maintain Full-Stack Web Apps. I use the MERN
                        Stack for building Web Apps (MongoDB, Express.js, React, & Node.js), as it is fast and reliable with development & deploment.
                        </h6>
                        </Col>
                        </Row>
                        <br></br>
                        <Row>
                        <Col>
                        <h6 style={{ marginBottom: '0px', float: 'left', textAlign: 'left' }} ><b>2 : UNIVERSITY OF THE WITWATERSRAND (2018-2019):</b></h6>
                        <h6 style={{ float: 'left', textAlign: 'left' }} ><b>Post-Graduate LLB (Incomplete):</b></h6>
                        <h6 style={{ float: 'left', textAlign: 'left' }} >
                        After my BA at Wits, I pursued a post-graduate LLB degree for two academic years. It was an amazing experience to learn about the law, and
                        the many skills that I acquired in the two years will be used throughout my career. This is especially true with regards to the Philosophy of Law,
                        in which we discussed the morals behind the law, rather than the law itself. This is especially relevant in the rapidly-changing IT Sector during the
                        Fourth Industrial Revolution.
                        </h6>
                        </Col>
                        <Col>
                        <h6 style={{ marginBottom: '0px', float: 'left', textAlign: 'left' }} ><b>4 : UNIVERSITY OF THE WITWATERSRAND (2020):</b></h6>
                        <h6 style={{ float: 'left', textAlign: 'left' }} ><b>Core Concepts in Digital Business (Currently Pursuing):</b></h6>
                        <h6 style={{ float: 'left', textAlign: 'left' }} >
                        An online, post-graduate diploma offered by Wits' Business School. It will teach me the core skills required in today's ever-growing & evolving
                        global digital economy. It emphasizes valauble digital managment competencies that ensure I will be ready for several leadership roles within various
                        contexts that will contribute to the digital managment systems of the world during the Fourth Indistrail Revolution.
                        </h6>
                        </Col>
                        </Row>
                        <br></br>
                    </Col>
                </Row>


        </Styling>
    </div>
);