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

import { MovieStyles } from './movie.styles';

type MoviePropsType = {
    children?: React.ReactNode
}


// this should be set in .env and checked for production environment
const url = "http://localhost:3201/api/v1/movies";

function Movie({ children }: MoviePropsType) {
    const { id } = useParams<any>();

    const urlFull = `${url}/${id}`;
    const [data, loading] = useFetch<movieType>(url);

    const positioning = {
        left: "10rem",
        bottom: "10rem"
    }

    return(
        <>
        {
            loading
                ? <Spinner positionFixed={false}></Spinner>
                : <>

                :<Image
                    image1x={Background}
                    width={"100%"}
                    height={"55%"}
                />
                <MovieStyles>
                    <Image
                        image1x={Poster}
                        width={"37rem"}
                        height={"49rem"}
                        position={"relative"}
                        positioning={positioning}
                        boxShadow={"1.4rem 0.7rem 2.4rem  #00000086"}
                    />
                </MovieStyles>
            </>
        }
        </>
    );
}

export default Movie;