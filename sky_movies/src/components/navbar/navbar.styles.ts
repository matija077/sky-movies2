import styled from 'styled-components';

const NavbarStyles = styled.nav`
    position: relative;
    margin: 0 auto;
    margin-top: ${props => `${props.theme.spacing(8)}rem`};
    width: 75%;
    color: inherit;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: left;
`;

export {
    NavbarStyles
};