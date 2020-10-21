import Styling from '../components/Styling.js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faMapMarkerAlt, faAddressCard, faPhoneSquareAlt, faArrowAltCircleLeft, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default () => (
    <div>
         <Styling>
             
            <Row>
                <Col md={4}>
                    <h3 style={{ marginBottom: '1.5px', marginTop: '1.5px' }} > <FontAwesomeIcon icon={faAddressCard} /> <b> CONTACT INFO </b> </h3>
                    <hr style={{ backgroundColor: 'black', marginTop: '0px', padding: '1px' }} ></hr>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faPhoneSquareAlt} /> <b> MOBILE: </b> </h3>
                    <h3>+27 72 801 9695</h3>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faEnvelopeSquare} /> <b> EMAIL: </b> </h3>
                    <h3>byrongeo95@gmail.com</h3>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faGithubSquare} /> <b> GITHUB: </b> </h3>
                    <h3><a href='https://github.com/ByronGeo95' target='_blank' >ByronGeo95</a></h3>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faLinkedin} /> <b> LINKEDIN: </b> </h3>
                    <h3><a href='https://www.linkedin.com/in/byron-georgopoulos-1973a619a/' target='_blank' >Byron Georgopoulos</a></h3>
                    <br></br>
                    <h3> <FontAwesomeIcon icon={faMapMarkerAlt} /> <b> LOCATION: </b> </h3>
                    <h3>Morningside, Sandton, ZA</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </Col>

                <Col md={8} >
                    <h3 style={{ marginBottom: '1.5px', marginTop: '1.5px' }} > <FontAwesomeIcon icon={faCommentAlt} /> <b> CONTACT ME </b> </h3>
                    <hr style={{ backgroundColor: 'black', marginTop: '0px', padding: '1px' }} ></hr>
                     <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <FontAwesomeIcon style={{ fontSize: '50px', marginRight: '25px' }} icon={faArrowAltCircleLeft} /> <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faPhoneSquareAlt} /> <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faEnvelopeSquare} /> <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faGithubSquare} /> <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faLinkedin} />
                    <hr style={{ backgroundColor: 'black', padding: '1px', width: '400px', marginTop: '25px', marginBottom: '25px', float: 'center', textAlign: 'center' }} ></hr>
                    <h2>CONTACT ME ON ANY OF THE</h2>
                    <h2>LISTED PLATFORMS AND I'LL</h2>
                    <h2>GET IN TOUCH WITH YOU ASAP</h2>
                </Col>
            </Row>

         </Styling>
    </div>
);