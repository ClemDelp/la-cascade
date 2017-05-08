import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import ClemDelp from './components/ClemDelp'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ClemDelp} />
		{
			//<Route path="/about" component={About} />
		}
	</Route>
);
