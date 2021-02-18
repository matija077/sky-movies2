import * as React from 'react';

import FlexBox from '../flex_box/flex_box.component';
import Image from '../image/image.component';

import poster from '../../assets/Poster.jpg';

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
        <FlexBox
            direction={"column"}
            color={"primary"}
            padding={0}
            justifyContent={'space-between'}
        >
            <Image image1x={poster} alt={name}></Image>
            <div>name</div>
            <div>genre</div>
        </FlexBox>
    );
}

export default MovieComponent;