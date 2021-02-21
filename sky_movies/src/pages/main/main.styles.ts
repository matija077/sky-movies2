import styled from 'styled-components';
import backgroundImage from '../../assets/clouds@2x.png';

const MenuPage = styled.div`
    background-color: ${props => props.theme.colors.primary.main};
    display: grid;
    grid-template-areas: 'menu mainPage';
    grid-template-columns: 1fr 5fr;
    color: ${props => props.theme.fonts.colors.primary.main};
    letter-spacing: 0px;
    background: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: bottom -28rem right -5rem;
`;

export {
    MenuPage
};