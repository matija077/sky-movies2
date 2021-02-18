import styled from 'styled-components';

export type FlexBoxStylesPropsType = {
    direction: "row" | "row-reverse" | "column" | "column-reverse";
    wrap: "nowrap" | "wrap" | "wrap-reverse";
    justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right";
    alignItems: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end";
}

const FlexBoxStyles = styled.div<FlexBoxStylesPropsType>`
    display: flex;
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.wrap};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
`;

export {
    FlexBoxStyles
};