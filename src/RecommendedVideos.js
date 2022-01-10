import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';
import "./VideoCard.css";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
             <VideoCard
                 title="Weight loss in 30 days | 2021"
                 views="2.5M views"
                 timestamp="3 days ago"
                 channelImage="	https://lh3.googleusercontent.com/a-/AOh14GjO5Ci1BzGHVvJaixRKxaZ28HFDga1aB2quttohbiM=s96-c-rg-br100	"
                 channel="Utpal Singh"
                 image="https://media.gettyimages.com/photos/weight-loss-couple-picture-id157913780?s=2048x2048"

             />
             <VideoCard
                  title="Learn react in 30 days | 2021"
                 views="1.3M views"
                 timestamp="1 days ago"
                 channelImage="	https://lh3.googleusercontent.com/a-/AOh14GjO5Ci1BzGHVvJaixRKxaZ28HFDga1aB2quttohbiM=s96-c-rg-br100"
                 channel="Utpal Singh"
                 image="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
             />
             <VideoCard
                  title="Learn Java in 50 days | 2021"
                 views="2.5M views"
                 timestamp="5 days ago"
                 channelImage="	https://lh3.googleusercontent.com/a-/AOh14GjO5Ci1BzGHVvJaixRKxaZ28HFDga1aB2quttohbiM=s96-c-rg-br100"
                 channel="Utpal Singh"
                 image="https://www.oracle.com/a/tech/img/cb88-java-logo-001.jpg"
             />
             
             <VideoCard
                  title="Spring boot in 30 days | 2021"
                 views="2.5M views"
                 timestamp="6 days ago"
                 channelImage="	https://lh3.googleusercontent.com/a-/AOh14GjO5Ci1BzGHVvJaixRKxaZ28HFDga1aB2quttohbiM=s96-c-rg-br100"
                 channel="Utpal Singh"
                 image="https://miro.medium.com/max/1400/0*3GpaIneRDTfT15D1.png"
             />
             <VideoCard
                  title="Virat Kohli century at edgbaston| 2018"
                 views="29.6M views"
                 timestamp="3 years ago"
                 channelImage="https://lh3.googleusercontent.com/a-/AOh14GjO5Ci1BzGHVvJaixRKxaZ28HFDga1aB2quttohbiM=s96-c-rg-br100"
                 channel="Utpal Singh"
                 image="https://www.cricketcountry.com/wp-content/uploads/2018/08/Kohli100.jpg"
             />
             
            </div>


        </div>
    )
}

export default RecommendedVideos
