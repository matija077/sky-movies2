import React, { useMemo, useState, useEffect } from 'react';

import {
    ImageStyles,
    ImageContainerStyles,
    ImageContainerStylesPropsType
} from './image.styles';

export type ImagePropsType = {
    image1x: string,
    image2x?: string,
    image3x?: string,
    alt?: string,
} & ImageContainerStylesPropsType

function Image({alt, image2x, image1x, image3x, ...rest}: ImagePropsType) {
    // probably faster without, but to many ifs.
    // we dotn care about imagexx chanegs not persisting through renders.
    // only retur nvalue matters
    const srcSet = useMemo(() => {
        if (image2x || image3x) {
            if (!image2x) {
                image2x = "";
            } else {
                image2x = ` ${image2x} 2x,`;
            }
            if (!image3x) {
                image3x = "";
            } else {
                image3x = ` ${image3x} 3x`;
            }
            image1x =  `${image1x} 1x,`;

            return image1x + image2x + image3x;
        }

        return image1x;
    }, [image1x, image2x, image3x]);

    return(
        <ImageContainerStyles {...rest}>
            <ImageStyles alt={alt} srcSet={srcSet} src={image1x}  />
        </ImageContainerStyles>
    );
}

export default Image;