import styled from 'styled-components';

const TwoPieceItemStyles = styled.section`
    flex: 1 1 auto;
    width: 100%;
    min-width: 100%;
    overflow: hidden;
`;

const FirstItem = styled.span`

`;
const SecondItem = styled.label`
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    opacity: 0.6;
    display: inline-block;

    @media (any-hover: hover) {
        &:hover {
            opacity: 1;
            font-weight: bold;
        }
    }
`;

export {
    TwoPieceItemStyles,
    FirstItem,
    SecondItem
};