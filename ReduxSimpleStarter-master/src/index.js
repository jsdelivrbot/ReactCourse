//jsx cannot be interpretted by webpage
//therefore jsx  -> webpack, babel (transpile) -> .js web page
import _ from 'lodash';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';



import SearchBar from './components/search_bar'; //unlike libraries, you need to refer to the file.
												 //.js doesn't need extension
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyAYgPHuwWKQIVrk9DPQuggMbJT1vi0pSjQ';

/*
YTSearch({key: API_KEY, term: 'Overwatch'}, function(data)
{
	console.log(data);
});
*/

//Create some html

//const App = function() //this is a class. not an instance
//const App = () => //same as above, but es6 syntax
class App extends Component
{
	constructor(props)
	{
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('longboard');
	}

	videoSearch(term)
	{
		//YTSearch({key: API_KEY, term: 'Overwatch'}, function(data)
		YTSearch({key: API_KEY, term: term}, (videos) => 
		{
			//console.log(data);
			//this.setState({ videos: videos });
			this.setState({ 
				videos,
				selectedVideo: videos[0] 

			}); //if the key and the data name is same, you can combine them. ES6
		});
	}

	render()
	{
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		//onVideoSelect is pretty much sending an accessor to a child
		//this is called callBack function
		return (
			<div>
				<SearchBar onSearchTermChange= {videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos} 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				/>
			</div>
		); //html looking thing is jsx
	}
}

//then take the component and place it in the page
//Document Object Model (DOM) is a programming interface for HTML and XML documents

//App = class
//<App></App> = instance

ReactDOM.render(<App />, document.querySelector('.container')); //jsx wrap makes it an instance
//document.querySelector('.container') = target location
