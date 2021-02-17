import * as React from 'react';

import {
    TwoPieceItemStyles,
    FirstItem,
    SecondItem
} from './two_piece_item.styles';

type twoPieceItemPropsType = {
    text: string,
    icon: string
}

function TwoPieceItem({ icon, text }: twoPieceItemPropsType) {

    return(
        <TwoPieceItemStyles>
            <FirstItem>{icon}</FirstItem>
            <SecondItem>{text}</SecondItem>
        </TwoPieceItemStyles>
    );
}

export default TwoPieceItem;