import React , {useState} from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
 import { Menu } from '@material-ui/icons';
 import { Search } from '@material-ui/icons';
 import { VideoCall } from '@material-ui/icons';
 import { AppsSharp } from '@material-ui/icons';
 import {Notifications} from '@material-ui/icons';
 import { Avatar } from '@material-ui/core';


function Header() {

    const [inputSearch, setInputSearch]=useState('');

    return (
        <div className="header">
        <div className="header_left">
        <Menu/>

        <Link to="/">
        <img
              className="header_logo"
             src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' 
             alt=""/>
        </Link>
        </div>
        
            <div className="header_input">
            <input 
            onChange={e=> setInputSearch(e.target.value)} 
            value={inputSearch} placeholder="Search" 
            type="text"
            /> 
               <Link to={`/search/$inputSearch}`}> 
                <Search className="header_inputButton" />
               </Link>
            </div>
             

              <div className="header_icons">
             <VideoCall className="header-icon"/>
            <AppsSharp className="header-icon"/>
             <Notifications className="header-icon"/>
             <Avatar src="	https://pbs.twimg.com/profile_images/1288018929940496390/Wso9K0M-_400x400.jpg" 
                     alt="Utpal Singh"/>
             </div>
        </div>
    )
}

export default Header;
