import React from 'react';
import {  TuneOutlined } from '@material-ui/icons';
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


export const SearchPage = () => {
    return (
        <div className="searchPage">
        
            <div className="searchPage_filter">
             <TuneOutlined/>
             <h2>Filter</h2>
            </div>
            <hr/>


            <ChannelRow
                image="	https://pbs.twimg.com/profile_images/1288018929940496390/Wso9K0M-_400x400.jpg"
                channel="Crazy Food"
                verified
                subs="551k"
                noOfVideos={381}
                description="You can find awesome food recipes and Workout Videos"
            />
             
             <hr/>
             
             <VideoRow
                views="1.4k"
                subs ="651k"
                description="Do you want FREE one hour workshop on strength training...check out this video"
                timestamp ="59 seconds ago"
                channel ="Crazy Food"
                title  ="Get fit in 2022 with me"
                image  ="https://www.kindpng.com/picc/m/247-2478712_about1-gym-workout-png-transparent-png.png"
             />

<VideoRow
    views="1.4k"
                subs ="651k"
                description="Do you want FREE one hour workshop on Weight training...check out this video"
                timestamp ="59 seconds ago"
                channel ="Crazy Food"
                title  ="Get fit in 2022 with me"
                image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
/>

        </div>
    )
}
