import * as React from 'react';

import { Aside } from './menu.styles';

import Header from '../header/header.component';
import Navbar from '../navbar/navbar.component';
import TwoPieceItem from '../two_piece_item/two_piece_item.component';
import Typography from '../typography/typography.component';
import Image from '../image/image.component';

import logo1x from '../../assets/logo.png';
import logo2x from '../../assets/logo@2x.png';
import logo3x from '../../assets/logo@3x.png';
import announcements1x from '../../assets/announcements icon.png';
import announcements2x from '../../assets/announcements icon@2x.png';
import announcements3x from '../../assets/announcements icon@3x.png';
import home1x from '../../assets/home icone.png';
import home2x from '../../assets/home icone@2x.png';
import home3x from '../../assets/home icone@3x.png';
import play1x from '../../assets/play icon.png';
import play2x from '../../assets/play icon@2x.png';
import play3x from '../../assets/play icon@3x.png';
import settings1x from '../../assets/settings icon.png';
import settings2x from '../../assets/settings icon@2x.png';
import settings3x from '../../assets/settings icon@3x.png';

type menuPropsType = {

}

function Menu(props: menuPropsType) {

    return(
        <Aside>
            <Header>
                <Image
                    height={"72px"}
                    width={"220px"}
                    image1x={logo1x}
                    image3x={logo3x}
                    image2x={logo2x}
                    margin={[6, 0, 0, 0]}
                ></Image>
            </Header>
            <Navbar>
                <TwoPieceItem
                    icon={<Image
                        height={"28px"}
                        width={"28px"}
                        image1x={home1x}
                        image3x={home2x}
                        image2x={home3x}
                        margin={[2, 0, 0, 0]}
                        display={"inline-block"}
                    ></Image>}
                    text={<Typography type={"span"}>Home</Typography>}
                />
                <TwoPieceItem
                    icon={<Image
                        height={"28px"}
                        width={"28px"}
                        image1x={play1x}
                        image3x={play2x}
                        image2x={play3x}
                        margin={[2, 0, 0, 0]}
                        display={"inline-block"}
                    ></Image>}
                    text={<Typography type={"span"}>Play</Typography>}
                />
                <TwoPieceItem
                    icon={<Image
                        height={"28px"}
                        width={"28px"}
                        image1x={announcements1x}
                        image3x={announcements2x}
                        image2x={announcements3x}
                        margin={[2, 0, 0, 0]}
                        display={"inline-block"}
                    ></Image>}
                    text={<Typography type={"span"}>Announcements</Typography>}
                />
                <TwoPieceItem
                    icon={<Image
                        height={"28px"}
                        width={"28px"}
                        image1x={settings1x}
                        image3x={settings2x}
                        image2x={settings3x}
                        margin={[2, 0, 0, 0]}
                        display={"inline-block"}
                    ></Image>}
                    text={<Typography type={"span"}>Settings</Typography>}
                />
            </Navbar>
        </Aside>
    );
}

export default Menu;