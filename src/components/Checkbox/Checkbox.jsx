import React from 'react';
import s from './Checkbox.module.css';

const Checkbox = () => {
    return (
        <div>

            <label>
                <input className={s.checkbox} type="checkbox"/>
                Запомнить меня
            </label>

        </div>
    );
}

export default Checkbox;