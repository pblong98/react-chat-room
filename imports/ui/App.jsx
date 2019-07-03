import React from 'react';
import ChatBox from './Components/ChatBox';
import InputBar from './Components/InputBar';
import AccountUI from './Components/AccountUI';

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
  }

  render()
  {
    return(
      <div>
        { !this.state.logged ? <AccountUI logged = {this.onLogged}/> :  <div><ChatBox />  <InputBar /></div> }
      </div>
    );
  }
  
}

export default App;
