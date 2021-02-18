import * as React from 'react';

import { TypographyStyles, TypographyStylesPropsType } from './typography.styles';

type TypographyPropsType = {
    children: string,
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
} & TypographyStylesPropsType

function Typography({ children, type, ...rest }: TypographyPropsType) {
    console.log(children);
    return(
        <TypographyStyles {...rest} as={type}>
            {children}
        </TypographyStyles>
    );
}

export default Typography;