import React from 'react';
import {useState} from 'react';
import './Chat.css';
import {Avatar,IconButton} from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { InsertEmoticon , Mic} from '@material-ui/icons';

import PhotoRoundedIcon from '@material-ui/icons/PhotoRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';




function Chat({roomName}) {
const [input,setInput]=useState("");


const sendMessage = (e) =>{
    e.preventDefault();
    alert('You typed :'+ input);
};


function moreChat() {
    var x = document.getElementById("more_chat");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  function moreAttach() {
    var x = document.getElementById("more_attach");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                <h3>Room name</h3>
                <p>Last seen at...</p>
                </div>
                 <div className="chat_headerRight">
                <IconButton>
                <SearchOutlined />
                </IconButton>
                <IconButton>
                <AttachFile onClick={moreAttach} />
                </IconButton>

                <div id="more_attach"><ul>
                    <li><a href='#'><VideoCallRoundedIcon /></a></li>
                    <li><a href='#'><PersonRoundedIcon /></a></li>
                    <li><a href='#'><FileCopyRoundedIcon /></a></li>
                    <li><a href='#'><LockRoundedIcon /></a></li>
                    <li><a href='#'><PhotoRoundedIcon /></a></li>
                </ul></div>

                <IconButton>
                <MoreVertIcon onClick={moreChat} />
                </IconButton>
                <div id="more_chat"><ul>
                    <li><a href='#'>Contact Info</a></li>
                    <li><a href='#'>Select Message</a></li>
                    <li><a href='#'>Mute Notification</a></li>
                    <li><a href='#'>Clear Message</a></li>
                    <li><a href='#'>Delete Chat</a></li>
                </ul></div>
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
