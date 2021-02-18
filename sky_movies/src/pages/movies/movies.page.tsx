import * as React from 'react';

import FlexBox from '../../components/flex_box/flex_box.component';

import { MoviesStyles, MainGridStyles } from './movies.styles';

type MoviesPropsType = {
    children?: React.ReactNode
}

function Movies({ children }: MoviesPropsType) {

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
                    width={75}
                >
                    <span>First</span>
                    <span>First</span>
                    <span>First</span>

                </FlexBox>
                <span>adasdas</span>
            </FlexBox>
            <FlexBox
                padding={3}
                color={"secondary"}
            >
                <h5>All Movies</h5>
            </FlexBox>
            <MainGridStyles></MainGridStyles>
        </MoviesStyles>
    );
}

export default Movies;