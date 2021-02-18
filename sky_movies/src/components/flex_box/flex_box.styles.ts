import styled from 'styled-components';

export type FlexBoxStylesPropsType = {
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right";
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end";
    color: "primary" | "secondary" | "third";
    display?: "inline-flex" | "flex";
    padding: number,
    maxWidth?: number
}

const FlexBoxStyles = styled.div<FlexBoxStylesPropsType>`
    display: ${props => props.display || "flex"};
    flex-direction: ${props => props.direction || "row"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    justify-content: ${props => props.justifyContent || "flex-start"};
    align-items: ${props => props.alignItems || "stretch"};
    height: 100%;
    width: 100%;
    color: ${props => props.theme.fonts.colors[props.color].main};
    padding: ${props => `${props.theme.spacing(props.padding)}rem`};
    max-width: ${props => props.maxWidth ? `${props.maxWidth}%` : "unset"};
`;

export {
    FlexBoxStyles
};