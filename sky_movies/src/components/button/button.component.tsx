import * as React from 'react';

import { ButtonStyles, ButtonStylesPropsType } from './button.styles';

type ButtonPropsType = {
    children?: React.ReactNode,
} & ButtonStylesPropsType

function Button({ children, ...rest }: ButtonPropsType) {

    return(
        <ButtonStyles value={"aaaa"} {...rest}>
            {children}
        </ButtonStyles>
    );
}

export default Button;