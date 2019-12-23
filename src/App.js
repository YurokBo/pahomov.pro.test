import React from 'react';
import icon from './icon.png';
import './App.css';
import H1 from "./components/H1/H1";
import Mail from "./components/InputMail/Mail";
import Password from "./components/InputPassword/Password";
import Checkbox from "./components/Checkbox/Checkbox";
import ForgotPassword from "./components/passOrReg/ForgotPassQuestion/ForgotPassword";
import Registration from "./components/passOrReg/Registration/Registration";
import Copyright from "./components/Copyright/Copyright";
import LogIn from "./components/ButtonLogIn/LogIn";
import PassOrReg from "./components/passOrReg/passOrReg";




function App() {
    return (
        <div className="app-wrapper">

            <img src={icon} className="icon" alt="icon"/>
            {/*<Icon/>*/}
            <H1/>
            <Mail className="app-wrapper-mail"/>
            <Password/>

            <div className="app-wrapper-checkbox">
                <Checkbox />
            </div>


            <LogIn />
            <PassOrReg />
            <Copyright/>

        </div>
    );
}

export default App;
