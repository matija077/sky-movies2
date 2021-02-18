import styled from 'styled-components';

export type ImageStylesPropsType = {
    image1x: string,
    image2x?: string,
    image3x?: string,
    alt?: string
}

const ImageStyles = styled.img.attrs<ImageStylesPropsType>(({image1x, image2x, image3x}) => ({
    src: image1x,
    srcSet: () => {
        if (image2x || image3x) {
            if (!image2x) {
                image2x = "";
            } else {
                image2x = ` ${image2x} 2x`;
            }
            if (!image3x) {
                image3x = "";
            } else {
                image3x = ` ${image3x} 3x`;
            }
            image1x =  `${image1x} 1x`;

            return image1x + image2x + image3x;
        }

        return image1x;
    }
  }))<ImageStylesPropsType>`
    alt: ${props => props.alt || ""};
`;

export {
    ImageStyles,
};