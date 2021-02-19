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
    alt?: string
} & ImageContainerStylesPropsType

function Image({alt, image2x, image1x, image3x, width, height}: ImagePropsType) {
    // probably faster without, but to many ifs.
    const srcSet = useMemo(() => {
        if (image2x || image3x) {
            console.log(image2x);
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

            console.log(image2x);
            console.log(image3x);

            return image1x + image2x + image3x;
        }

        return image1x;
    }, [image1x, image2x, image3x]);

    const [state, setState] = useState("");
    console.log("re rendered");
    console.log(srcSet);

    useEffect(() => {
        setTimeout(() => {
            setState("3");
        }, 6000)
    })

    return(
        <ImageContainerStyles width={width} height={height}>
            <ImageStyles alt={alt} srcSet={srcSet} src={image1x} />
        </ImageContainerStyles>
    );
}

export default Image;