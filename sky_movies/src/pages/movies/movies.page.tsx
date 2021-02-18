import * as React from 'react';

import FlexBox from '../../components/flex_box/flex_box.component';
import Button from '../../components/button/button.component';
import Typography from '../../components/typography/typography.component';
import Spinner from '../../components/spinner/spinner.component';

import { useFetch } from '../../utility/hooks/customHooks';
import { movieType } from '../../utility/types/movies.types';

import { MoviesStyles, MainGridStyles } from './movies.styles';

type MoviesPropsType = {
    children?: React.ReactNode
}

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
                    justifyContent={"space-between"}
                    display={"inline-flex"}
                    maxWidth={75}
                >
                    <span>First</span>
                    <span>First</span>
                    <span>First</span>

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
                <h5>All Movies</h5>
            </FlexBox>
                {loading
                    ? <Spinner positionFixed={false}></Spinner>
                    : <MainGridStyles>

                    </MainGridStyles>
                }
        </MoviesStyles>
    );
}

export default Movies;