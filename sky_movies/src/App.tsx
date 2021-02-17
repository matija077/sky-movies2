import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ErrorBoundary from './pages/error/error.page';

type AppPropsType = {

};

function App(props: AppPropsType) {

  return(
    <ErrorBoundary>
      <Router>
        <Switch>

          <Route>
            "Home page"
          </Route>
        </Switch>
      </Router>

    </ErrorBoundary>
  );
}

export default App;
