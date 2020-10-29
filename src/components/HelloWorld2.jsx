import React from 'react';
import './helloWorld.css';
const ProfileCard = ({name}) => (
    <div className="card">
        <div className="container">
            <h4>Hello again <b>{name}</b></h4>
        </div>
    </div>
)

export default ProfileCard;
