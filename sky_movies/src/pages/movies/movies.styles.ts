import styled from 'styled-components';

type MainGridStylesPropsType = {};

const MoviesStyles = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4vh 2vh 1fr;
`;

const MainGridStyles = styled.article<MainGridStylesPropsType>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(176px, 1fr));
    grid-template-rows: auto;
    row-gap: ${props => `${props.theme.spacing(0.8)}rem`};
    column-gap: ${props => `${props.theme.spacing(2)}rem`};
`;

export {
    MoviesStyles,
    MainGridStyles
};