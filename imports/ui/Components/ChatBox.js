import React from 'react';

class ChatBox extends React.Component{
    render()
    {
        return (
            <div className="jumbotron flowscroll">
                <div className="d-flex">
                    <div className="pl-3 pr-3 pt-3 mb-2 bg-info text-white theirmessage">
                    <span className="badge badge-light">User 1</span>
                    Their message text 1...
                    <hr />
                    <div className="pb-1 messagetext text-right">10:24 2/7/2019</div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="pl-3 pr-3 pt-3 mb-2 bg-info text-white theirmessage">
                    <span className="badge badge-light">User 1</span>
                    Their message text 2 ... Their message text 2 ... Their message text 2 ... Their message text 2 ...
                    <hr />
                    <div className="pb-1 messagetext text-right">10:24 2/7/2019</div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="pl-3 pr-3 pt-3 mb-2 bg-secondary text-white minemessage">
                    <span className="badge badge-light">Me</span>
                    Mine message text 1 ... Mine message text 1 ... Mine message text 1 ... Mine message text 1 ... Mine message text 1 ... Mine message text 1 ...
                    <hr />
                    <div className="pb-1 messagetext text-left">10:24 2/7/2019</div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <div className="pl-3 pr-3 pt-3 mb-2 bg-secondary text-white minemessage">
                    <span className="badge badge-light">Me</span>
                    Mine message text 2 ...
                    <hr />
                    <div className="pb-1 messagetext text-left">10:24 2/7/2019</div>
                    </div>
                </div>
                </div>
        );
    }
}

export default ChatBox;
