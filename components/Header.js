import Link from 'next/link';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faLaptopCode, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

const headerStyle = {
  backgroundColor: 'white',
  height: '40px',
}; 

const linkStyle = {
  fontSize: '15px',
  marginRight: '30px',
  paddingTop: '2.5px',
  color: 'black',
};

export default () => (
    <div style={headerStyle} > 
            <Navbar>
              <Link href='/'>
                <Button style={linkStyle} variant='link'> <FontAwesomeIcon icon={faHouseUser} /> HOME</Button>
              </Link>
              <Link href='/projects'>
                <Button style={linkStyle} variant='link'> <FontAwesomeIcon icon={faLaptopCode} /> PORTFOLIO</Button>
              </Link>
             <Link href='/contact'>
                <Button style={linkStyle} variant='link'> <FontAwesomeIcon icon={faPhoneSquareAlt} /> CONTACT</Button>
              </Link>
          </Navbar>
    </div>
);