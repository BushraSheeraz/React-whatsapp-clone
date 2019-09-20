import React from 'react';
import './Whatsapp.css';
import PropTypes from 'prop-types';

function Whatsapp(props) {
    return (
        <div className="chat-box">
            <div className="contact">
                <div className="profile-pic">
                    <img src={props.imgURL} />
                </div>
                <div className="message">
                    <h4>{props.name}</h4>
                    <p>{props.number}</p>
                    <p>{props.message}</p>
                    <p>{props.time}</p>
                </div>
            </div>
            <span>{props.unread}</span>
        </div>
    )
}

Whatsapp.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
    time: PropTypes.string,
    imgURL: PropTypes.string.isRequired,
    message: PropTypes.string,
}

export default Whatsapp;