import * as React from 'react';

import FlexBox from '../flex_box/flex_box.component';
import Image from '../image/image.component';
import Typography from '../typography/typography.component';

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
    console.log(poster);

    return(
        <FlexBox
            direction={"column"}
            color={"primary"}
            padding={0}
            justifyContent={'space-between'}
        >
            <Image
                image1x={poster}
                alt={name}
                width={"176px"}
                height={"235px"}
            ></Image>
            <Typography
                type={"h4"}
                color={"third"}
                fontSize={1.8}
            >name</Typography>
            <Typography
                type={"h6"}
                color={"secondary"}
                opacity={0.7}
                fontSize={1.4}
            >genre</Typography>
        </FlexBox>
    );
}

export default MovieComponent;