import * as React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import FlexBox from '../flex_box/flex_box.component';
import Image from '../image/image.component';
import Typography from '../typography/typography.component';

import poster from '../../assets/Poster.jpg';

import {
    MovieComponentStyles,
} from './movie.styles';

import { movieType } from '../../utility/types/movies.types';


type MoviePropsType = {

} & movieType;

function MovieComponent({
    explicit,
    genre,
    name,
    rating,
    id
}: MoviePropsType) {
    console.log(poster);
    const { path ,url } = useRouteMatch();
    console.log(useRouteMatch());
    console.log([path]);
    console.log([url]);

    return(
        <FlexBox
            direction={"column"}
            color={"primary"}
            padding={0}
            justifyContent={'space-between'}
        >
            <Link
                to={{
                    pathname: `/movie/${id}`
                }}
            >
                <Image
                    image1x={poster}
                    alt={name}
                    width={"176px"}
                    height={"235px"}
                ></Image>
            </Link>
            <Typography
                type={"h4"}
                color={"third"}
                fontSize={1.8}
                >{name}</Typography>
            <Typography
                type={"h6"}
                color={"secondary"}
                opacity={0.7}
                fontSize={1.4}
            >{genre}</Typography>
        </FlexBox>
    );
}

export default MovieComponent;