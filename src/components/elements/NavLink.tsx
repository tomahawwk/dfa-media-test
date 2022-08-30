import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Link } from './';

type NavLinkProps = {
    slug: string;
    title: string;
    active?: number;
    icon: () => JSX.Element;
}

interface NavLinkStyledProps {
    active?: number;
}

const StyledNavLink = styled(Link)<NavLinkStyledProps>`
    font-size: 14px;
    display: flex;
    align-items: center;
    grid-gap: 20px;
    width: fit-content;
    color: ${props => props.theme.colors.lightBlue};
    padding-left: 10px;
    transition-duration: ${props => props.theme.transition.duration};
    @media (max-width: ${props => props.theme.screen.tablet}){
            padding: 0;
            font-size: 12px;
            color: white;
    }
    &:hover {
        color: white;
        svg {
            fill: ${props => props.theme.colors.blue};
        }
    }
    &:before {
        content: "";
        position: absolute;
        height: 40px;
        width: 4px;
        top: 0;
        bottom: 0;
        margin: auto;
        left: -10px;
        background-color: ${props => props.theme.colors.blue};
        transition-duration: inherit;
        transition-timing-function: ${props => props.theme.transition.timing};
        transform: scaleY(0);
        transition-delay: 0s;
        @media (max-width: ${props => props.theme.screen.tablet}){
            width: 7px;
            height: 7px;
            border-radius: 100%;
            left: -15px;
        }
    }
    svg {
        fill: ${props => props.theme.colors.lightBlue};
        width: 27px;
        height: 27px;
        margin-top: -4px;
        transition-duration: inherit;
        @media (max-width: ${props => props.theme.screen.tablet}){
            display: none;
        }
    }
    ${props => props.active && css`
        color: white;
        svg {
            fill: ${props => props.theme.colors.blue};
        }
        &:before {
            transform: scaleY(1);
            transition-delay: .1s;
        }
        @media (max-width: ${props => props.theme.screen.tablet}){
            transform: translateX(15px);
        }
    `}
    
`

const NavLink:FC<NavLinkProps> = ({ slug, title, icon, active }) => {
    const Icon = icon;
    return (
        <StyledNavLink to={slug} active={active}>
            <Icon />
            <span>{ title }</span>
        </StyledNavLink>
    )
}

export default NavLink;