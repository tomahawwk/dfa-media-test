import styled from 'styled-components'

import { Link } from './'
import { FadeYUp } from '../helpers/Animations';

const StyledLogo = styled(Link)`
    opacity: 0;
    animation: ${FadeYUp} .5s ${props => props.theme.transition.function} forwards;
    color: white;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 22px;
    display: flex;
    align-items: center;
    grid-gap: 10px;
    position: relative;
    &:after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: ${props => props.theme.colors.blue};
    }
    @media (max-width: ${props => props.theme.screen.tablet}){
        font-size: 18px;
    }
`

const Logo = () => {
    return (
        <StyledLogo to="/">Logo</StyledLogo>
    )
}

export default Logo;