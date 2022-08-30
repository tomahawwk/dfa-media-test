import styled, {css} from 'styled-components'

interface Props {
    primary?: boolean;
    small?: boolean;
}
  
export default styled.button<Props>`
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
    transition-duration: ${props => props.theme.transition.duration};
    color: white;
    background-color: transparent;
    font-weight: 400;
    ${props => props.primary && css`
        padding: 14px 30px 12px;
        border-radius: 30px;
        display: block;
        color: white;
        font-weight: 500;
        background: ${props => props.theme.colors.blue};
        &:hover {
            background: ${props => props.theme.colors.blueHover};
        }
        
    `}
    ${props => props.small && css`
        @media (max-width: ${props => props.theme.screen.tablet}){
            padding: 6px 15px 5px;
            height: fit-content;
            border-radius: 15px;
            font-size: 12px;
        }
    `}
`;