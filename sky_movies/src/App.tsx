import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import ErrorBoundary from './pages/error/error.page';
import GlobalStyles from './utility/styles/global.styles';
import { ThemeProvider } from 'styled-components';
import User from './components/user/user.component';
import Search from './components/search/search.component';
import FlexBox from './components/flex_box/flex_box.component';

import MainPage from './pages/main/main.page';
import Movies from './pages/movies/movies.page';
import Menu from './components/menu/menu.component';
import Header from './components/header/header.component';
import MoviePage from './pages/movie/movie.page';

import { theme } from "./utility/styles/theme.styles";

type AppPropsType = {

};

function App(props: AppPropsType) {
  /*
  * interpretation of the search -
  * for each search it returns to the main page
  * so the logic should be in the app component.
  */
  const [search, setSearch] = useState("Search")

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
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  color={"secondary"}
                  padding={3}
                >
                  <Search value={search}></Search>
                  <User>User</User>
                </FlexBox>
              </Header>
              <Router>
                <Switch>
                  <Route path="/" exact>
                    <Movies></Movies>
                  </Route>
                  <Route path="/movie/:id">
                    <MoviePage></MoviePage>
                  </Route>
                  <Route>
                    <Redirect to="/">
                    </Redirect>
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
