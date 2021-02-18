import * as React from 'react';

import {
    ImageStyles,
    ImageStylesPropsType
} from './image.styles';


type ImagePropsType = {

} &  ImageStylesPropsType

function Image(props: ImagePropsType) {

    return(
        <ImageStyles {...props} />
    );
}

export default Image;