import * as React from 'react';

import { Aside } from './menu.styles';

import Header from '../header/header.component';
import Navbar from '../navbar/navbar.component';
import TwoPieceItem from '../two_piece_item/two_piece_item.component';
import Typography from '../typography/typography.component';

type menuPropsType = {

}

function Menu(props: menuPropsType) {

    return(
        <Aside>
            <Header>
                <TwoPieceItem
                    icon="icon"
                    text={<Typography type={"h6"} fontSize={3.3}>Sky movies</Typography>}
                />
            </Header>
            <Navbar>
                <TwoPieceItem
                    icon="text"
                    text={<Typography type={"span"}>Home</Typography>}
                />
                <TwoPieceItem
                    icon="text"
                    text={<Typography type={"span"}>Play</Typography>}
                />
                <TwoPieceItem
                    icon="text"
                    text={<Typography type={"span"}>Announcements</Typography>}
                />
                <TwoPieceItem
                    icon="text"
                    text={<Typography type={"span"}>Settings</Typography>}
                />
            </Navbar>
        </Aside>
    );
}

export default Menu;