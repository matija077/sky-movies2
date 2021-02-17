import styled from 'styled-components';

const Aside = styled.aside`
    background-color: ${props => {
        return props.theme.colors.secondary.main}
    };
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    height: 100%;
`;

export {
    Aside
};