import styled from 'styled-components';

const MovieStyles = styled.main`
    position: relative;
`;

const MovieContainerStyle = styled.article`
    display: inline-flex;
    flex-direction: column;
    align-items: start;
    margin: auto 10rem;
    color: ${props => props.theme.fonts.colors.secondary.main};
    min-height: 100px;
    width: 42rem;
    vertical-align: top;

    & > :not(:first-child){
        margin-top: 2rem;
    }
    & > :not(:last-child){
        margin-bottom: 2rem;
    }
`;

const SectionStyles = styled.section`


`;


export {
    MovieStyles,
    MovieContainerStyle,
    SectionStyles
};