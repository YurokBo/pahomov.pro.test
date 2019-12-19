import React from 'react';
import icon from '.src/icon.png';
import s from './Icon.module.css';

const Icon = (props) => {
    return (
        <div>
            <img src={icon} className="icon" alt="icon"/>
        </div>


    );
}

export default Icon;