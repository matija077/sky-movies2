import styled from 'styled-components';

export type ButtonStylesPropsType = {
    backgroundColor?: string
}

const ButtonStyles = styled.button<ButtonStylesPropsType>`
    border-radius: 15%/55%;
    background-color: ${props => props.backgroundColor
        ? props.backgroundColor
        : props.theme.colors.secondary.main
    };
    text-align: center;
    padding: 1em;
    height: fit-content;
`;

export {
    ButtonStyles
};