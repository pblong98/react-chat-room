import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Messages } from '../../api/Messages';

class ChatBox extends React.Component{
    
    renderMessages()
    {
        var messages = this.props.messages;
        return messages.map((item, index) => {
            var isMineMessages = item.username === Meteor.user().username;
            console.log();
            var date = new Date(item.createdAt);
            var createdAt = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" +date.getMinutes();
            if(isMineMessages)
            {
                return (
                    <div className="d-flex justify-content-end" key={index}>
                        <div className="pl-3 pr-3 pt-3 mb-2 bg-secondary text-white minemessage">
                        <span className="badge badge-light">Me</span>
                            {item.text}
                        <hr />
                        <div className="pb-1 messagetext text-left">{createdAt}</div>
                        </div>
                    </div>
                );
            }
            else
            {
                return (                 
                    <div className="d-flex" key={index}>
                        <div className="pl-3 pr-3 pt-3 mb-2 bg-info text-white theirmessage">
                            <span className="badge badge-light">{item.username}</span>
                                {item.text}
                            <hr />
                            <div className="pb-1 messagetext text-right">{createdAt}</div>
                        </div>
                    </div>
                );
            }
            
        });
    }

    render()
    {
        return (
            <div className="jumbotron flowscroll">
                {this.renderMessages()}
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('Messages');
    return{
        messages : Messages.find({},{sort : {createdAt : 1}}).fetch()
    }
})(ChatBox);