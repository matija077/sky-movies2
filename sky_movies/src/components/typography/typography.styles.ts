import styled from 'styled-components';

export type TypographyStylesPropsType = {
    fontSize?: number
}

const TypographyStyles = styled.main<TypographyStylesPropsType>`
    font-size: ${props => props.fontSize ? `${props.fontSize}rem` : "inherit"};
`;

export {
    TypographyStyles,
};