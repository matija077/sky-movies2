import * as React from 'react';

import { SearchStyles } from './search.styles';

type SearchPropsType = {
    children?: React.ReactNode
}

function Search({ children }: SearchPropsType) {

    return(
        <SearchStyles>
            {children}
        </SearchStyles>
    );
}

export default Search;