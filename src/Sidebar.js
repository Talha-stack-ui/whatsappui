import React,{useState} from 'react';
import { Avatar , IconButton } from '@material-ui/core';
import  DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';


const info = [
    {user:'Talha' , dp:img1},
    {user:'Hamza' , dp:img2},
    {user:'Hasan' , dp:img3},
    {user:'Kaleem' , dp:img4}

];

function Sidebar({setCname}) {

    
    function moreSidebar() {
        var x = document.getElementById("more_sidebar");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      };

      


    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
             <div className="sidebar_headerRight">
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <ChatIcon />
                </IconButton>
                <IconButton>
                <MoreVertIcon onClick={moreSidebar}/>
                </IconButton>

                <div id="more_sidebar"><ul>
                    <li><a href='#'>New Group</a></li>
                    <li><a href='#'>Create a Room</a></li>
                    <li><a href='#'>Profile</a></li>
                    <li><a href='#'>Archived</a></li>
                    <li><a href='#'>Starred</a></li>
                    <li><a href='#'>Settings</a></li>
                    <li><a href='#'>Log Out</a></li>
                </ul></div>

             </div>
             </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                 <SearchOutlined />
                 <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
               { info.map((x)=>(<SidebarChat room={x.user} img={x.dp} setCname={setCname}/>))
                }


            </div>
        </div>
    )
}

export default Sidebar;
