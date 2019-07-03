import React from 'react';
import {} from './styles/AccountUI.css'
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

class AccountUI extends React.Component
{
    constructor(){
        super();
        this.state = {
            SignUp : false
        }
        this.formSubmit = this.formSubmit.bind(this);
    }

    formModeToggle()
    {
        var signUpMode = !this.state.SignUp;
        this.setState({SignUp : signUpMode});
    }

    formSubmit(event)
    {
        event.preventDefault();
        var username = this.refs.userNametxt.value;
        var password = this.refs.passwordtxt.value;
        var password2 = this.refs.password2txt ? this.refs.password2txt.value : "";
        if(this.state.SignUp)
        {
            if(password != password2)
            {
                alert('FAIL: Passwords do not match');
                return;
            }
            Accounts.createUser({username : username, password : password},(error, result)=>{
                if(error)
                {
                    alert('FAIL: ' + error.reason);
                }
                else
                {
                    alert('Success');
                    this.setState({SignUp : false});
                }
            });
        }
        else
        {
            Meteor.loginWithPassword(username, password,(error, result)=>{
                if(error)
                {
                    alert('FAIL: ' + error.reason);
                }
                else
                {
                    this.props.logged();
                }
            });
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
                    <form onSubmit = {this.formSubmit}>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="User name..."  ref="userNametxt"/>
                        <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password..." ref="passwordtxt"/>
                        {
                            this.state.SignUp ? <input type="password" id="password2" className="fadeIn first" name="login" placeholder="Type password again..." ref="password2txt"/> : ''
                        }
                        <button onClick={() => {this.formModeToggle()}} type="button" className="btn p-1 btn-warning text-white fadeIn fourth">{ this.state.SignUp ? 'Đăng nhập' : 'Đăng ký'}</button>
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
