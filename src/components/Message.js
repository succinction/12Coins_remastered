import React from 'react';

export default function Message(props) {
    return (
        <p className="messenger" id="messenger">
            <span className="title" >{props.num} Coins & Scale</span>   :    {props.msg}
        </p>
    );
}
