import React from 'react';
import s from './Checkbox.module.css';

const Checkbox = () => {
    return (
        <div>
            <div className={s.checkBoxWrapper}>
                <input type="checkbox" className={s.checkbox}/>
                <label>
                    <p className={s.savePass} s>Запомнить меня</p>
                </label>
            </div>
        </div>
    );
}

export default Checkbox;