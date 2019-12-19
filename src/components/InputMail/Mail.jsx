import React from 'react';
import s from './Mail.module.css';

const Mail = () => {
    return (
        <div >
            <input className={s.inputMail} type="text" placeholder='Почта*'/>
        </div>


    );
}

export default Mail;