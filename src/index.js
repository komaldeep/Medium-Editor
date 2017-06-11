import React from 'react';
import { render } from 'react-dom';

// redux setup
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//importing css in project
require('./styles/style.css');
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

// React redux store
import configureStore from './components/store/index';
const store = configureStore();

// Pages of the project
import MediumEditor from './components/Scenes/Index';



render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={MediumEditor}>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>,
  document.querySelector('.container')
);
