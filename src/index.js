import React from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import ScheduleComponent from './ScheduleComponent';
import PeriodComponent from './PeriodComponent';
import App from './App';
import './index.css';

const reducer = combineReducers({
  form: reduxFormReducer
});
const store = createStore(reducer);

ReactDOM.render(
  (<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/period" component={PeriodComponent} />
        <Route path="/schedule" component={ScheduleComponent} />
      </Route>
    </Router>
  </Provider>),
  document.getElementById('root')
);
