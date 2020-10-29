import React from 'react';
import './helloWorld.css';
export const HelloWorld = ({name}) => (
    <div className="card">
        <div className="container">
            <h4>Hello <b>{name}</b></h4>
        </div>
    </div>
)
