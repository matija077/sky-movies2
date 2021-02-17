import * as React from 'react';

import { HeaderStyles } from './header.styles';

type headerPropsType = {
    children?: React.ReactNode;
}

function Header({ children }: headerPropsType) {

    return(
        <HeaderStyles>
            {children}
        </HeaderStyles>
    );
}

export default Header;