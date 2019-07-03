import React from 'react';
import {} from './styles/AccountUI.css'

class AccountUI extends React.Component
{
    constructor(){
        super();
        this.state = {
            SignUp : false
        }
    }

    render()
    {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    {/* Tabs Titles */}
                    {/* Icon */}
                    <div className="fadeIn first">
                    <h2>{ !this.state.SignUp ? 'Sign in' : 'Sign up'}</h2>
                    </div>
                    {/* Login Form */}
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="User name..." />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password..." />
                        {
                            this.state.SignUp ? <input type="text" id="password2" className="fadeIn third" name="login" placeholder="Type password again..."/> : ''
                        }
                        <button type="button" className="btn p-1 btn-warning text-white fadeIn fourth">{ this.state.SignUp ? 'Đăng nhập' : 'Đăng ký'}</button>
                        <input type="submit" className="fadeIn fourth"/>
                    </form>
                    {/* Remind Passowrd */}
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountUI;
