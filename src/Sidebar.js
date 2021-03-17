import React from 'react';
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

function Sidebar() {
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
                <MoreVertIcon />
                </IconButton>
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
                <SidebarChat room='Talha' img={img1} />
                <SidebarChat room='Hammad' img={img2} />
                <SidebarChat room='Kaleem' img={img3}/>
                <SidebarChat room='Hasan' img={img4}/> 
            </div>
        </div>
    )
}

export default Sidebar;
