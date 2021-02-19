import * as React from 'react';

import { SearchStyles } from './search.styles';
import Button from '../button/button.component';
import TwoPieceItem from '../two_piece_item/two_piece_item.component';
import Image from '../image/image.component';
import Typography from '../typography/typography.component';
import FlexBox from '../flex_box/flex_box.component';
import searchIcon from '../../assets/search-24px.svg';

type SearchPropsType = {
    children?: React.ReactNode,
    value: string
}

function Search({ children, value }: SearchPropsType) {

    return(
        <SearchStyles>
            <Button backgroundColor={"third"} width={"15vw"} height={"60px"}>
                <FlexBox
                    alignItems={"center"}
                    color={"secondary"}
                    padding={3}
                >
                    <TwoPieceItem
                            icon={<Image
                                height={"28px"}
                                width={"28px"}
                                image1x={searchIcon}
                                margin={[2, 0, 0, 0]}
                                display={"inline-block"}
                            ></Image>}
                            text={<Typography type={"span"} color={"secondary"}>{value}</Typography>}
                        />
                </FlexBox>
            </Button>
        </SearchStyles>
    );
}

export default Search;