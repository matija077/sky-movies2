import * as React from 'react';

import {
    TwoPieceItemStyles,
    FirstItem,
    SecondItem,
    TwoPieceItemStylesPropsType
} from './two_piece_item.styles';

type twoPieceItemPropsType = {
    text: React.ReactNode,
    icon: React.ReactNode
} & TwoPieceItemStylesPropsType;

function TwoPieceItem({ icon, text, padding }: twoPieceItemPropsType) {

    return(
        <TwoPieceItemStyles padding={padding}>
            <FirstItem>{icon}</FirstItem>
            <SecondItem>{text}</SecondItem>
        </TwoPieceItemStyles>
    );
}

export default TwoPieceItem;