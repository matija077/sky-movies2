import styled from 'styled-components';

const Aside = styled.aside`
    background-color: ${props => {
        return props.theme.colors.secondary.main}
    };
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    min-width: 312px;
    height: 100vh;
    min-height: 100vh;
    font-size: 2.2rem;
`;

export {
    Aside
};