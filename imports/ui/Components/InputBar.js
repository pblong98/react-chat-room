import React from 'react';

class InputBar extends React.Component{
    render()
    {
        return (
            <div className="input-group mr-5">
                <input type="text" className="form-control" placeholder="Type something..." aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">Send</button>
                </div>
            </div>
        );
    }
}

export default InputBar;
