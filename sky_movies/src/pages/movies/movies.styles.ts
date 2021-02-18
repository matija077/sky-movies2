import styled from 'styled-components';

const MoviesStyles = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4vh 2vh 1fr;
`;

const MainGridStyles = styled.article`
    display: grid;
    grid-template-columns: repeat(fit-content, minmax(176px, 1fr));
    grid-template-rows: auto;
`;

export {
    MoviesStyles,
    MainGridStyles
};