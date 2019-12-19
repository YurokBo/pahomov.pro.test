import React from 'react';
import s from './LogIn.module.css';

const LogIn = () => {
    return (
        <div >
            <label className={s.inpButton}>
                <input type='button' className={s.logIn} value='Войти в аккаунт'/>
            </label>

        </div>


    );
}

export default LogIn;