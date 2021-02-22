import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import FlexBox from '../../components/flex_box/flex_box.component';
import Button from '../../components/button/button.component';
import Typography from '../../components/typography/typography.component';
import Spinner from '../../components/spinner/spinner.component';
import Movie from '../../components/movie/movie.component';
import MoviePage from '../../pages/movie/movie.page';

import { useFetch } from '../../utility/hooks/customHooks';
import { movieType } from '../../utility/types/movies.types';

import { MoviesStyles, MainGridStyles } from './movies.styles';

type MoviesPropsType = {
    children?: React.ReactNode
}

const categories = ["All", "Drama", "Biography", "SF", "Drama", "Crime",
    "Romance", "Action"];

// this should be set in .env and checked for production environment
const url = "http://localhost:3201/api/v1/movies";

function Movies({ children }: MoviesPropsType) {
    const [data, loading] = useFetch<Array<movieType>>(url);
    console.log(loading);

    return(
        <MoviesStyles>
            <FlexBox
                color={"secondary"}
                justifyContent={"space-between"}
                padding={3}
            >
                <FlexBox
                    padding={0}
                    color={"secondary"}
                    justifyContent={"start"}
                    display={"inline-flex"}
                    maxWidth={75}
                    elementsDistance={5}
                    wrap={"wrap"}
                >
                    {
                        categories.map((category, index) => {
                            return (
                                <Button key={index} backgroundColor={"primary"}>
                                    <Typography type={"h6"}>
                                        {category}
                                    </Typography>
                                </Button>
                            );
                        })
                    }

                </FlexBox>
                <Button>
                    <Typography type={"h6"} fontSize={2.4} color={"primary"}>
                        + Add New
                    </Typography>
                </Button>
            </FlexBox>
            <FlexBox
                padding={3}
                color={"secondary"}
            >
                <Typography type={"h4"} fontSize={2.2} color={"secondary"}>
                        All Movies
                </Typography>
            </FlexBox>
                {loading
                    ? <Spinner positionFixed={false}></Spinner>
                    : <MainGridStyles>
                        {
                            data?.map(({id, ...rest})  => {
                                return <Movie key={id} {...rest} />
                            })
                        }
                    </MainGridStyles>
                }

            <Route path="/:id">
                <MoviePage></MoviePage>
            </Route>
        </MoviesStyles>
    );
}

export default Movies;