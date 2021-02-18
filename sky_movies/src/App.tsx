import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ErrorBoundary from './pages/error/error.page';
import GlobalStyles from './utility/styles/global.styles';
import { ThemeProvider } from 'styled-components';
import User from './components/user/user.component';
import Search from './components/search/search.component';
import FlexBox from './components/flex_box/flex_box.component';

import MainPage from './pages/main/main.page';
import Menu from './components/menu/menu.component';
import Header from './components/header/header.component';

import { theme } from "./utility/styles/theme.styles";

type AppPropsType = {

};

function App(props: AppPropsType) {

  return(
    <ErrorBoundary>
      <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <MainPage>
          <Menu></Menu>
            <div>
              <Header shadow>
                <FlexBox
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  wrap={"nowrap"}
                >
                  <Search>fpsdfsdfadsf</Search>
                  <User>sdfaff</User>
                </FlexBox>
              </Header>
              <Router>
                <Switch>
                  <Route>
                    "Home page"
                  </Route>
                </Switch>
              </Router>
            </div>
        </MainPage>
      </ThemeProvider>
    </>
    </ErrorBoundary>
  );
}

//empoty butto nwrapper
// button
// container
// devider

export default App;
