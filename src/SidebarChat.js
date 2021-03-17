import React from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core'



const createChat = () => {
 const roomName = prompt("Please enter a name for chat");
};


function SidebarChat({room, img, addNewChat}) {
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={img}/>
            <div className="sidebarChat_info">
                <h2>{room}</h2>
                <p>Last Message...</p>
            </div>
        </div>
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat;
