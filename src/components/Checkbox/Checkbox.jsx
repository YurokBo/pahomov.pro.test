import React from 'react';
import s from './Checkbox.module.css';

const Checkbox = () => {
    return (
        <div className={s.checkbox}>
            <input type="checkbox"/>
            <div>Запомнить меня</div>
        </div>


    );
}

export default Checkbox;