import styled from 'styled-components';

export type ImageContainerStylesPropsType = {
    width: string,
    height: string,
    margin?: [number, number, number, number],
    display?: "block" | "inline-block",
    padding?: number,
    position?: "relative" | "absolute" | "fixed" | "sticky"
    positioning?: {
        left?: string,
        top?: string,
        right?: string,
        bottom?: string
    },
    boxShadow?: string
};

const ImageStyles = styled.img.attrs(() => ({


  }))`
  width: 100%;
  height: 100%;
`;

const ImageContainerStyles = styled.div<ImageContainerStylesPropsType>`
    width: ${props =>  props.width};
    height: ${props =>  props.height};
    padding: ${props => props.padding ? `${props.theme.spacing(props.padding)}rem` : undefined};
    margin-left: ${props =>  props.margin ? `${props.theme.spacing(props.margin[0])}rem` : undefined};
    margin-top: ${props =>  props.margin ? `${props.theme.spacing(props.margin[1])}rem` : undefined};
    margin-bottom: ${props =>  props.margin ? `${props.theme.spacing(props.margin[2])}rem` : undefined};
    margin-right: ${props =>  props.margin ? `${props.theme.spacing(props.margin[3])}rem` : undefined};
    left: ${props =>  props?.positioning?.left ?? undefined};
    top: ${props =>  props?.positioning?.top ?? undefined};
    bottom: ${props =>  props?.positioning?.bottom ?? undefined};
    right: ${props =>  props?.positioning?.right ?? undefined};
    display: ${props => props.display ?? "block"};
    position: ${props => props.position ?? "initial"};
    box-shadow: ${props => props.boxShadow ?? undefined};
`;

export {
    ImageStyles,
    ImageContainerStyles
};