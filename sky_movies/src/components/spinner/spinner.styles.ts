import styled  from 'styled-components';

const SpinnerStylesOutsideContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

type SpinnerStylesContainerPropsType = {
    positionFixed: boolean
}

const SpinnerStylesContainer = styled.article.attrs<SpinnerStylesContainerPropsType>
(props => ({

}))<SpinnerStylesContainerPropsType>`
    position: fixed;
    top: 20%;
    bottom: 20%;
    width: 100%;
    height: 60vh;
    ${({ positionFixed }) => {
        if (!positionFixed) {
            return `
                position: absolute;
                left: 25%;
                bottom: 25%;
                top: 25%;
                width: 50%;
            `;
        }
    }}
`;

var SpinnerStyles = styled.figure`
    position: relative;
    top: calc(50% - 1.25em);
    margin: auto;
    width: 2.5em;
    height: 2.5em;
    animation: spin 3s linear infinite;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
    border-top: 0.2em solid #767676;
    border-radius: 50%;
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

export {
    SpinnerStyles,
    SpinnerStylesContainer,
    SpinnerStylesOutsideContainer
};