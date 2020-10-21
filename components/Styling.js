import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';

const styling = {
    textAlign: 'center',
    float: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '75%'
};

const hrStyle = {
    backgroundColor: 'black',
    padding: '1px',
    marginBottom: '0px',
    marginTop: '0px'
};

export default (props) => (
    <div>
        <div style={styling}>
    	    <Header />
            <hr style={hrStyle} ></hr>
    	    {props.children}
             <hr style={hrStyle} ></hr>
  	    </div>
    </div>
);