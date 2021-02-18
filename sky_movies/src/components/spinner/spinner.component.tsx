import React from 'react';

import {
    SpinnerStyles,
    SpinnerStylesContainer,
    SpinnerStylesOutsideContainer
} from './spinner.styles';

type SpinnerPropsType = {
    positionFixed: boolean
}

function Spinner({ positionFixed }: SpinnerPropsType) {
    return (
    <SpinnerStylesOutsideContainer>
        <SpinnerStylesContainer
            positionFixed={positionFixed}
        >
            <SpinnerStyles>
            </SpinnerStyles>
        </SpinnerStylesContainer>
    </SpinnerStylesOutsideContainer>
    );
}

export default Spinner;