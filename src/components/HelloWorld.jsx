import React from 'react';
import PropTypes from 'prop-types';
import './helloWorld.css';

export const HelloWorld = ({name, sayHello}) => (
    <div className="card" onClick={()=>sayHello(name)}>
        <div className="container">
            <h4>Hello <b>{name}</b></h4>
        </div>
    </div>
)

HelloWorld.propTypes={
    name: PropTypes.string.isRequired,
    sayHello: PropTypes.func,
}

HelloWorld.defaultProps={
    name:'',
    sayHello: (name) => { alert.log('Hi '+ name) }
}
