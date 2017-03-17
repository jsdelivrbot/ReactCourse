//list just renders, so it can be just a function component

import React from 'react';
import VideoListItem from './video_list_item';


//for function component, just use props
//for class component, use this.props
const VideoList = (props) =>
{
	//create a function component of list of VideoListItem
	//then add this to this current video list render
	const videoItems = props.videos.map((video) => 
	{
		return <VideoListItem 
					key = {video.etag} 
					video={video}
					onVideoSelect={props.onVideoSelect}
				/>;
	});

	return (
		//let's use bootstrap to style it up
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;