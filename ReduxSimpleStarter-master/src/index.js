//jsx cannot be interpretted by webpage
//therefore jsx  -> webpack, babel (transpile) -> .js web page


import React from 'react';

//Create some html

const App = function()
{
	return <div>Hi!</div>; //html looking thing is jsx
}

//then take the component and place it in the page

React.render(App);