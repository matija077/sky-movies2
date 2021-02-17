import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ErrorBoundary from './pages/error/error.page';

import GlobalStyles from './utility/styles/global.styles';
import { ThemeProvider } from 'styled-components';

import { theme } from "./utility/styles/theme.styles";

type AppPropsType = {

};

function App(props: AppPropsType) {

  return(
    <ErrorBoundary>
      <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>

            <Route>
              "Home page"
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
    </ErrorBoundary>
  );
}

export default App;
