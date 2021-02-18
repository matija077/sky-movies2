import * as React from 'react';

import {
    MovieComponentStyles,
} from './movie.styles';

import { movieType } from '../../utility/types/movies.types';

type MoviePropsType = {

} & Omit<movieType, "id">

function MovieComponent({
    explicit,
    genre,
    name,
    rating
}: MoviePropsType) {

    return(
        <MovieComponentStyles>
            {genre}
        </MovieComponentStyles>
    );
}

export default MovieComponent;