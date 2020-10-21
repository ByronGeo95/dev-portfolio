import Styling from '../components/Styling.js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faListAlt, faCloudSunRain, faDice, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faItunes } from '@fortawesome/free-brands-svg-icons';

export default () => (
    <div>

        <Styling>
             
            <Row>
                <Col md={4}>
                    <h3 style={{ marginBottom: '1.5px', marginTop: '1.5px' }} > <FontAwesomeIcon icon={faGithubSquare} /> <b> GITHUB REPOS </b> </h3>
                    <hr style={{ backgroundColor: 'black', marginTop: '0px', padding: '1px' }} ></hr>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faItunes} /> <a href='https://github.com/ByronGeo95/itunes-app' target='_blank' ><b>iTunes API Web App</b></a> </h3>
                    <h5>Full-Stack MERN Web App Using The iTunes API</h5>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faListAlt} /> <a href='https://github.com/ByronGeo95/Web-Project' target='_blank' ><b>Web Project List</b></a> </h3>
                    <h5>Web App To Help Keep Track Of Your Web Projects</h5>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faCloudSunRain} /> <a href='https://github.com/ByronGeo95/weather-api' target='_blank' > <b>OpenWeather API Web App</b> </a> </h3>
                    <h5>Web App Using OpenWeather API & Geolocation API</h5>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faDice} /> <a href='https://github.com/ByronGeo95/reac-jack' target='_blank' > <b>Reac-Jack</b> </a> </h3>
                    <h5>React based variation of Blackjack</h5>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faShoppingCart} /> <a href='https://github.com/ByronGeo95/NoirStreet' target='_blank' > <b>NoirStreet</b> </a> </h3>
                    <h5>Online Store made using HTML5, CSS3, & JavaScript</h5>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </Col>

                <Col md={8} >
                    <h3 style={{ marginBottom: '1.5px', marginTop: '1.5px' }} > <FontAwesomeIcon icon={faGlobe} /> <b> HEROKU </b> </h3>
                    <hr style={{ backgroundColor: 'black', marginTop: '0px', padding: '1px' }} ></hr>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faItunes} /> <a href='https://itunes-app-byron-geo.herokuapp.com/' target='_blank' ><b>iTunes API Web App</b></a> </h3>
                    <h5>Full-Stack MERN Web App Using The iTunes API</h5>
                    <br></br>
                    <Row>
                        <Col>
                            <Image src='static/images/iTunes1.png' style={{ width: '99%' }} />
                        </Col>
                        <Col>
                            <Image src='static/images/iTunes2.png' style={{ width: '99%' }} />
                        </Col>
                        <Col>
                            <Image src='static/images/iTunes3.png' style={{ width: '99%' }} />
                        </Col>
                    </Row>
                    <br></br>
                    <hr style={{ backgroundColor: 'black', marginTop: '20px', marginBottom: '20px', padding: '1px' }} ></hr>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faCloudSunRain} /> <a href='https://hidden-island-00233.herokuapp.com/' target='_blank' > <b>OpenWeather API Web App</b> </a> </h3>
                    <h5>Web App Using OpenWeather API & Geolocation API</h5>
                    <Row>
                        <Col>
                            <Image src='static/images/Weather1.png' style={{ width: '99%' }} />
                        </Col>
                        <Col>
                            <Image src='static/images/Weather2.png' style={{ width: '99%' }} />
                        </Col>
                        <Col>
                            <Image src='static/images/Weather3.png' style={{ width: '99%' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>

         </Styling>

    </div>
);