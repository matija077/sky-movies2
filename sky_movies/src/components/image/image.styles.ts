import styled from 'styled-components';

export type ImageContainerStylesPropsType = {
    width: string,
    height: string
};

const ImageStyles = styled.img.attrs(() => ({


  }))`
  width: 100%;
  height: 100%;
`;

const ImageContainerStyles = styled.div<ImageContainerStylesPropsType>`
    width: ${props =>  props.width};
    height: ${props =>  props.height};
`;

export {
    ImageStyles,
    ImageContainerStyles
};