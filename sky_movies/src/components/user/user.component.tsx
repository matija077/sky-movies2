import * as React from 'react';

import { UserStyles } from './user.styles';

type UserPropsType = {
    children?: React.ReactNode
}

function User({ children }: UserPropsType) {
    return(
        <UserStyles>
            {children}
        </UserStyles>
    );
}

export default User;