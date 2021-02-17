import styled from 'styled-components';

const MenuPage = styled.div`
    background-color: ${props => props.theme.colors.primary.main};
    display: grid;
    grid-template-areas: 'menu mainPage';
    grid-template-columns: 1fr 5fr;
    color: ${props => props.theme.colors.primary.main};
    letter-spacing: 0px;
`;

export {
    MenuPage
};