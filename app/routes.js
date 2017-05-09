import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import PersonalCard from './components/PersonalCard'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PersonalCard} />
		{
			//<Route path="/about" component={About} />
		}
	</Route>
);
