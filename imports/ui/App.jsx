import React from 'react';
import ChatBox from './Components/ChatBox';
import InputBar from './Components/InputBar';
import AccountUI from './Components/AccountUI';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

class App extends React.Component{
  
  constructor()
  {
    super();
    this.state = {
      logged : false
    };

    this.onLogged = this.onLogged.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogged()
  {
    this.setState({logged : true});
    //console.log(Accounts.user());
  }

  onLogout()
  {
    Accounts.logout();
    this.setState({logged : false});
    //console.log(Accounts.user());
  }

  componentDidMount()
  {
    var token = localStorage.getItem('Meteor.loginToken');
    if(token != null)
    {
      Meteor.loginWithToken(token, (error, result) =>{
        if(!error)
        {
          //console.log(result);
          //console.log(Accounts.user());
          Accounts.user();
          this.setState({logged : true});
        }
      });
    }
  }

  render()
  {
    return(
      <div>
        { 
        !this.state.logged ? <AccountUI logged = {this.onLogged}/> :  
        <div>
          <ChatBox />
          <InputBar />
          <div className="btn-group logoutbtn" role="group">
            <button type="button" className="btn btn-success">{Accounts.user().username}</button>
            <button onClick={this.onLogout} className="btn btn-danger" type="button">Logout</button>
          </div>
        </div> 
        }
      </div>
    );
  }
  
}

export default App;
