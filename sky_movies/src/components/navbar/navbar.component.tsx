import * as React from 'react';

import { NavbarStyles } from './navbar.styles';

type navbarPropsType = {
    children: React.ReactNode;
}

function Navbar({ children }: navbarPropsType) {

    return(
        <NavbarStyles>
            {children}
        </NavbarStyles>
    );
}

export default Navbar;