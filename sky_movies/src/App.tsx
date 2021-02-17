import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ErrorBoundary from './pages/error/error.page';

import GlobalStyles from './utility/styles/global.styles';

type AppPropsType = {

};

function App(props: AppPropsType) {

  return(
    <ErrorBoundary>
      <>
      <GlobalStyles />
      <Router>
        <Switch>

          <Route>
            "Home page"
          </Route>
        </Switch>
      </Router>
    </>
    </ErrorBoundary>
  );
}

export default App;
