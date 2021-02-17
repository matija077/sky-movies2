import * as React from 'react';

import { MenuPage} from './main.styles';

type mainPropsType = {
    children: React.ReactNode
}

function MainPage({ children }: mainPropsType) {

    return(
        <MenuPage>
            {children}
        </MenuPage>
    );
}

export default MainPage;