import * as React from 'react';

import { HeaderStyles } from './header.styles';

type headerPropsType = {
    children?: React.ReactNode;
    shadow?: boolean
}

function Header({ children, shadow = false }: headerPropsType) {

    return(
        <HeaderStyles shadow={shadow}>
            {children}
        </HeaderStyles>
    );
}

export default Header;