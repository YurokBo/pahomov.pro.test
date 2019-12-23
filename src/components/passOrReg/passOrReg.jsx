import React from 'react';
import s from './passOrReg.module.css';
import ForgotPassword from "./ForgotPassQuestion/ForgotPassword";
import Registration from "./Registration/Registration";

const PassOrReg = () => {
    return (
        <div className={s.passOrRegWrapper}>
            <ForgotPassword />
            <Registration />
        </div>


    );
}

export default PassOrReg;