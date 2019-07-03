import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Messages } from '../../api/Messages';

class ChatBox extends React.Component{
    
    renderMessages()
    {
        var messages = this.props.messages;
        return messages.map((item, index) => {
            var isMineMessages = item.owner === Meteor.userId();
            
            if(isMineMessages)
            {
                return (
                    <div className="d-flex justify-content-end">
                        <div className="pl-3 pr-3 pt-3 mb-2 bg-secondary text-white minemessage">
                        <span className="badge badge-light">Me</span>
                            {item.text}
                        <hr />
                        <div className="pb-1 messagetext text-left">{item.createdAt}</div>
                        </div>
                    </div>
                );
            }
            else
            {
                return (                 
                    <div className="d-flex">
                        <div className="pl-3 pr-3 pt-3 mb-2 bg-info text-white theirmessage">
                            <span className="badge badge-light">{item.username}</span>
                                {item.text}
                            <hr />
                            <div className="pb-1 messagetext text-right">{item.createdAt}</div>
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
        messages : Messages.find().fetch()
    }
})(ChatBox);