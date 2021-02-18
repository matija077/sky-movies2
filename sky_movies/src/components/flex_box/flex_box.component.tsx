import * as React from 'react';

import { FlexBoxStyles, FlexBoxStylesPropsType } from './flex_box.styles';

type FlexBoxPropsType = {
    children: React.ReactNode
} & FlexBoxStylesPropsType

function FlexBox({ children, ...rest }: FlexBoxPropsType) {

    return(
        <FlexBoxStyles {...rest}>
            {children}
        </FlexBoxStyles>
    );
}

export default FlexBox;