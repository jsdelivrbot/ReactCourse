import React, {Component} from 'react';
 
//functional component = component with just a function //just a jsx
/*
const SearchBar = () =>
{
	return <input />
};
*/

//class component = more aware. remember, communicate, etc.
//class SearchBar extends React.Component //SearchBar now has all the functionality from React.Component
class SearchBar extends Component //some es6 syntax again
{
	constructor(props)
	{
		super(props);

		//whenever the state is changed, the render is rerun
		this.state = { term: 'Search...', firstSearch: 'true' };
	}

	//every class needs a render method
	render()
	{
		//render needs to return some jsx
		//return <input onChange = {this.onInputChange} />;
		//return <input onChange = {(event) => console.log(event.target.value)} />;
		return (
			<div className="search-bar">
				<input 
					value = {this.state.term}
					onChange = {event => this.onInputChange(event.target.value)}		
				/>
			</div>
		);

		//Value of the input: {this.state.term}

		//this.state = something == BAD PRACTICE. USE this.setState
		//getting my this.state is find. just don't set
	}

	onInputChange(term)
	{
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}

	//event handler
	/*
	onInputChange(event) //not a given function name. you can technically name it anythinng
	{
		console.log(event.target.value);
		//console.log(event);
	}
	*/
}


export default SearchBar; //need to export in order to be imported else where

