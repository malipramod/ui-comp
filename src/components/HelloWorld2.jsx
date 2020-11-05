import React from 'react';
import PropTypes from 'prop-types';
import './helloWorld.css';

export const HelloWorld2 = ({name}) => (
    <div className="card">
        <div className="container">
            <h4>Hello again <b>{name}</b></h4>
        </div>
    </div>
)


HelloWorld2.propTypes={
    name: PropTypes.string.isRequired
}

HelloWorld2.defaultProps={
    name:''
}
