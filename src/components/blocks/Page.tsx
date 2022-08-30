import { FC } from 'react'
import styled from 'styled-components'
import { fluidRange } from 'polished'

import { FadeYUp } from '../helpers/Animations';

type PageProps = {
    title: string;
    children?: JSX.Element | JSX.Element[];
}

const StyledPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 40px;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
    padding: 40px 4vw;
    @media (max-width: ${props => props.theme.screen.tablet}){
        padding: 16px;
        grid-gap: 20px;
    }
`

const StyledPageTitle = styled.h2`
    letter-spacing: 0.05em;
    font-family: ${props => props.theme.fonts.secondary};
    animation: ${FadeYUp} .5s ${props => props.theme.transition.function} forwards;
    animation-delay: .3s;
    opacity: 0;
    ${(props) =>
        fluidRange({
            prop: 'font-size',
            fromSize: `22px`,
            toSize: `36px`,
        },
        props.theme.screen.tablet,
        props.theme.screen.desktop,
    )}
`

const StyledPageInner = styled.div`
    opacity: 0;
    animation: ${FadeYUp} .5s ${props => props.theme.transition.function} forwards;
    animation-delay: .45s;
`

const Page:FC<PageProps> = ({ title, children }) => {
    return (
        <StyledPage>
            <StyledPageTitle>{ title }</StyledPageTitle>
            <StyledPageInner>{ children }</StyledPageInner>
        </StyledPage>
    )
}

export default Page;
