import styled from 'styled-components';

export type TwoPieceItemStylesPropsType ={
    padding?: number
}

const TwoPieceItemStyles = styled.section<TwoPieceItemStylesPropsType>`
    flex: 1 1 auto;
    width: 100%;
    min-width: 100%;
    overflow: hidden;
    margin-bottom: ${props => `${props.theme.spacing()}rem`};
    padding: ${props => props.padding ? `${props.theme.spacing(props.padding)}rem` : undefined};
`;

const FirstItem = styled.span`

`;
const SecondItem = styled.label`
    margin-left: 0.5rem;
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