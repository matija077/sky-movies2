import styled from 'styled-components';

export type TypographyStylesPropsType = {
    fontSize?: number,
    color?: "primary" | "secondary" | "third",
    opacity?: number
}

const TypographyStyles = styled.main<TypographyStylesPropsType>`
    font-size: ${props => props.fontSize ? `${props.fontSize}rem` : "inherit"};
    color: ${props => {
        console.log(props.theme.fonts.colors);
        return props.color ? props.theme.fonts.colors[props.color].main : "inherit";
    }};
    opacity: ${props => props.opacity || 1.0}
`;

export {
    TypographyStyles,
};