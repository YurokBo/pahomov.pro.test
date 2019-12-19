import React from 'react';
import s from './Password.module.css';

const Password = () => {
    return (
        <div>
            <input className={s.inputPass} type="text" placeholder='Пароль*'/>
        </div>


    );
}

export default Password;