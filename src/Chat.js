import React from 'react';
import {useState} from 'react';
import './Chat.css';
import {Avatar,IconButton} from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import { InsertEmoticon , Mic} from '@material-ui/icons';





function Chat() {
const [input,setInput]=useState("");


const sendMessage = (e) =>{
    e.preventDefault();
    alert('You typed :'+ input);
};



    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at...</p>
                </div>
                 <div className="chat_headerRight">
                <IconButton>
                <SearchOutlined />
                </IconButton>
                <IconButton>
                <AttachFile />
                </IconButton>
                <IconButton>
                <MoreVert />
                </IconButton>
                 </div>
            </div>

            <div className="chat_body">
                    <p className="chat_message">
                    <span className="chat_name">Talha</span>Hey Guys!
                    <span className="chat_time">2:49 pm</span></p>
                 
                    <p className="chat_message chat_receiver">
                    <span className="chat_name">Hasan</span>Hello There...
                    <span className="chat_time">3:04 pm</span></p>
                 
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input
                     placeholder="Type a message..." type="text" value={input} onChange={(e) => setInput(e.target.value)}
                     />
                    <button  type="submit" onClick={sendMessage}>Send </button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat;
