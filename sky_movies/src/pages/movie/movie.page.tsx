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

import { useFetch } from '../../utility/hooks/customHooks';
import { movieType } from '../../utility/types/movies.types';

import { MovieStyles } from './movie.styles';

type MoviePropsType = {
    children?: React.ReactNode
}


// this should be set in .env and checked for production environment
const url = "http://localhost:3201/api/v1/movies";

function Movie({ children }: MoviePropsType) {
    const [data, loading] = useFetch<Array<movieType>>(url);
    console.log("moibeeeloading");

    return(
        <MovieStyles>

        </MovieStyles>
    );
}

export default Movie;