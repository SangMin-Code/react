import React, { Component } from 'react';

class Video extends Component {
    render() {
        const id = this.props.id
        const title = this.props.title
        const idx = this.props.idx
        return (
            <div className='video'>
                <span className='video-title'>
                   {idx} id:{id} 제목:{title}
                </span>
            </div>
        );
    }
}

export default Video;