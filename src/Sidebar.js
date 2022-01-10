import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import { Home, Subscriptions, Whatshot } from '@material-ui/icons';
import { VideoLibrary } from '@material-ui/icons';
import { History } from '@material-ui/icons';
import { OndemandVideo } from '@material-ui/icons';
import { WatchLater } from '@material-ui/icons';
import { ThumbUpAltOutlined } from '@material-ui/icons';
import { ExpandMoreOutlined } from '@material-ui/icons';
function Sidebar() {
    return (
        <div className="sidebar">
         <SidebarRow  Icon={Home} title="Home"/>
         <SidebarRow Icon={Whatshot}title="Trending"/>
         <SidebarRow Icon ={Subscriptions}title="Subscription"/>
         <hr/>

         <SidebarRow  Icon={VideoLibrary} title="Library"/> 
         <SidebarRow  Icon={History} title="History"/>
         <SidebarRow  Icon={OndemandVideo} title="Your videos"/>
         <SidebarRow  Icon={WatchLater} title="Watch Later"/>
         <SidebarRow  Icon={ThumbUpAltOutlined} title="Liked videos"/>
         <SidebarRow  Icon={ExpandMoreOutlined} title="Show more videos"/>
         <hr/>



        </div>
    )
}

export default Sidebar
