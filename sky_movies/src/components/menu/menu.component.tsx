import * as React from 'react';

import { Aside } from './menu.styles';

import Header from '../header/header.component';
import Navbar from '../navbar/navbar.component';
import TwoPieceItem from '../two_piece_item/two_piece_item.component';

type menuPropsType = {

}

function Menu(props: menuPropsType) {

    return(
        <Aside>
            <Header>
                <TwoPieceItem icon="icon" text="Sky movies"/>
            </Header>
            <Navbar>
                <TwoPieceItem icon="text" text="Home" />
                <TwoPieceItem icon="text" text="Play" />
                <TwoPieceItem icon="text" text="Announcements" />
                <TwoPieceItem icon="text" text="Settings" />
            </Navbar>
        </Aside>
    );
}

export default Menu;