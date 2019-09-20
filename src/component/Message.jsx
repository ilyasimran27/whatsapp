import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';

document.querySelector("li");

function Message(props) {
    if (props.isUnread==true){
        return 
    }
    return (
        <li>
            <div className="im">
           <img src={props.imgURL} alt={props.name} />
           </div>
            <div className="body">
                <h3>{props.name}</h3>
                <p>{props.number}</p>
                <p>{props.message}</p>
                <p>{props.time}</p>
              
            
            </div>
           
        </li>
    )
}



export default Message;
