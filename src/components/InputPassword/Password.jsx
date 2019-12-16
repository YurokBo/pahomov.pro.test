import React from 'react';
import s from './Password.module.css';

const Password = () => {
    return (
        <div className={s.inputFieldPass}>
            <input type="text" value='Пароль*'/>
        </div>


    );
}

export default Password;