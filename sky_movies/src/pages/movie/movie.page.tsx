import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useParams
  } from 'react-router-dom';

import FlexBox from '../../components/flex_box/flex_box.component';
import Button from '../../components/button/button.component';
import Typography from '../../components/typography/typography.component';
import Spinner from '../../components/spinner/spinner.component';
import Image from '../../components/image/image.component';
import Background from '../../assets/Background.jpg';
import Poster from '../../assets/Poster.jpg';

import { useFetch } from '../../utility/hooks/customHooks';
import { movieType } from '../../utility/types/movies.types';

import {
    MovieStyles,
    MovieContainerStyle,
    SectionStyles
} from './movie.styles';

type MoviePropsType = {
    children?: React.ReactNode
}


// this should be set in .env and checked for production environment
const url = "http://localhost:3201/api/v1/movies";

function Movie({ children }: MoviePropsType) {
    const { id } = useParams<any>();

    const urlFull = `${url}/${id}`;
    const [data, loading] = useFetch<movieType>(urlFull);
    console.log(data);

    const positioning = {
        left: "4rem",
        bottom: "6rem"
    }
    const fullRating = `${data?.rating}/10`;
    const lorelmIpusm = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at erat rhoncus,
    viverra libero at, posuere augue. In sagittis erat orci,
    nec porttitor tortor mattis eu. Praesent ut lacus in orci aliquam rhoncus in sed mauris.`;
    console.log(typeof fullRating);

    return(
        <>
        {
            loading
                ? <Spinner positionFixed={false}></Spinner>
                : <>

                :<Image
                    image1x={Background}
                    width={"100%"}
                    height={"35%"}
                />
                <MovieStyles>
                    
                    <MovieContainerStyle>
                        <SectionStyles as="header">
                                <Typography
                                    type={"h6"}
                                    fontSize={2.8}
                                >
                                    {data?.name ?? ""}
                                </Typography>
                                <Typography
                                     type={"span"}
                                     fontSize={2.1}
                                >
                                    {data?.genre ?? ""}
                                </Typography>
                        </SectionStyles>
                        <SectionStyles>
                                <Typography
                                    type={"span"}
                                    fontSize={1.6}
                                >
                                    Rating
                                </Typography>
                                <div>
                                    <span>starts</span>
                                    <Typography
                                        type={"span"}
                                        fontSize={1.6}
                                    >
                                        {fullRating}
                                    </Typography>
                                </div>
                        </SectionStyles>
                        <SectionStyles>
                            <Typography
                                    type={"span"}
                                    fontSize={2}
                                >
                                    {lorelmIpusm}
                                </Typography>
                        </SectionStyles>
                    </MovieContainerStyle>
                    Buttons
                </MovieStyles>
            </>
        }
        </>
    );
}

export default Movie;