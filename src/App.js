import React from 'react';
import icon from './icon.png';
import './App.css';
import H1 from "./components/H1/H1";
import Post from "./components/InputPost/Post";
import Password from "./components/InputPassword/Password";
import Checkbox from "./components/Checkbox/Checkbox";
import ForgotPassword from "./components/ForgotPassQuestion/ForgotPassword";
import Registration from "./components/Registration/Registration";
import Copyright from "./components/Copyright/Copyright";
import LogIn from "./components/ButtonLogIn/LogIn";


function App() {
    return (
        <div className="App">

            <img src={icon} className="icon" alt="icon"/>
            <H1/>
            <Post/>
            <Password/>
            <Checkbox/>
            <LogIn />
            <div>
                <ForgotPassword />
                <Registration/>
            </div>
            <Copyright/>

        </div>
    );
}

export default App;
