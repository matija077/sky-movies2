import styled from 'styled-components';

type MainGridStylesPropsType = {};

const MoviesStyles = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 85px 60px 1fr;
    overflow: hidden;
`;

const MainGridStyles = styled.article<MainGridStylesPropsType>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(176px, 1fr));
    grid-template-rows: 1fr;
    row-gap: ${props => `${props.theme.spacing(1.5)}rem`};
    column-gap: ${props => `${props.theme.spacing(2)}rem`};
    overflow: hidden
`;

export {
    MoviesStyles,
    MainGridStyles
};