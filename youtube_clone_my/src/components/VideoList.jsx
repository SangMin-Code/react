import React, { Component } from 'react';
import Video from './Video';

class VideoList extends Component {
      
    render() {
        return (
            <>
             <ul>
                 {this.props.videos.map((video,idx)=>(
                     <Video 
                        idx = {idx+1}
                        key  = {video.id}
                        id  = {video.id}
                        title = {video.snippet.title}
                    />
                 ))}
             </ul>   
            </>
        );
    }
}

export default VideoList;