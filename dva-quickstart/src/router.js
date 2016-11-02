import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link,browserHistory } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Page2 from './routes/page2'
import Test_data from './routes/test_data'

export default function({ history }) {
  return (
    <Router history={browserHistory}>
    	{/*<IndexRoute component={}/>*/} 
      	<Route path="/" component={IndexPage} />
    	<Route path="/page2" component={Page2}/>
    	<Route path="/test_data" component={Test_data}/>
    </Router>
  );
};
