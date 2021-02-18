import styled from 'styled-components';

type HeaderStylesPropsType = {
    shadow: boolean
}

const HeaderStyles = styled.header<HeaderStylesPropsType>`
    height: 5vh;
    min-height: 80px;
    width: 100%;
    box-shadow: ${props => {
        return props.shadow
            ? "0px 0.2rem 0.1rem #00000029"
            : undefined
    }};
`;

export {
    HeaderStyles
};