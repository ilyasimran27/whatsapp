import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';



function Message(props) {
    
    return (
        <li style ={{backgroundColor: props.isUnread ? '#e9967a' : '#c3f8e6'}}>
            <div className="im">
           <img src={props.imgURL} alt={props.name} />
           </div>
            <div className="body">
                <h3>{props.name}</h3>
                {props.isUnread?(<span>{props.numbUnread}</span>):""}
                <p>{props.number}</p>
                <p>{props.message}</p>
                <p>{props.time}</p>
              
            
            </div>
           
        </li>
    )
}



export default Message;
