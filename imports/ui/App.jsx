import React from 'react';
import ChatBox from './Components/ChatBox';
import InputBar from './Components/InputBar';
import AccountUI from './Components/AccountUI';
import { Accounts } from 'meteor/accounts-base';

class App extends React.Component{
  
  constructor()
  {
    super();
    this.state = {
      logged : false
    };

    this.onLogged = this.onLogged.bind(this);
  }

  onLogged()
  {
    this.setState({logged : true});
    console.log(Accounts.user());
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
            <button className="btn btn-danger" type="button">Logout</button>
          </div>
        </div> 
        }
      </div>
    );
  }
  
}

export default App;
