import React from 'react';
import {Meteor} from 'meteor/meteor';

class InputBar extends React.Component{
    
    onSendText = () =>
    {
        var text = this.refs.inputtxt.value;
        console.log(text);
        Meteor.call('Messages.push', text);
        this.refs.inputtxt.value = "";
    }
    
    render()
    {
        return (
            <div className="input-group mr-5">
                <input type="text" className="form-control" placeholder="Type something..." aria-describedby="basic-addon2" ref="inputtxt" />
                <div className="input-group-append">
                    <button onClick={this.onSendText} className="btn btn-primary" type="button">Send</button>
                </div>
            </div>
        );
    }
}

export default InputBar;
