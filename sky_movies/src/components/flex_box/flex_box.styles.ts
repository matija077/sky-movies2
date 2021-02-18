import styled from 'styled-components';

export type FlexBoxStylesPropsType = {
    direction: "row" | "row-reverse" | "column" | "column-reverse";
    wrap: "nowrap" | "wrap" | "wrap-reverse";
    justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right";
    alignItems: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end";
    color: "primary" | "secondary" | "third";
}

const FlexBoxStyles = styled.div<FlexBoxStylesPropsType>`
    display: flex;
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.wrap};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    height: 100%;
    width: 100%;
    color: ${props => props.theme.fonts.colors[props.color].main};
    padding: ${props => `${props.theme.spacing(3)}rem`};
`;

export {
    FlexBoxStyles
};