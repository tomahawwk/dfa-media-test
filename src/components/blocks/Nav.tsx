import styled, { css } from 'styled-components'
import { FC } from 'react';
import { useLocation } from "react-router-dom";

import { FadeYUp } from '../helpers/Animations';
import { NavLink } from '../elements'
import {
    DashboardIcon,
    ActivityExchangeIcon,
    ExchangeBloggersIcon,
    PrIcon,
    StructureIcon,
    ShopIcon,
    MarathoneIcon,
    LandingsIcon
} from '../elements/Icons'

type NavProps = {
    aside?: boolean;
    menu?: boolean;
    active?: boolean;
}

const StyledNav = styled.div<NavProps>`
    ${props => props.aside && css`
        padding-top: 15px;
        opacity: 0;
        animation: ${FadeYUp} .5s ${props => props.theme.transition.function} forwards;
        animation-delay: .1s;
        @media (max-width: ${props => props.theme.screen.tablet}){
            display: none;
        }
    `}
    
    ${props => props.menu && css`
        display: none;
        @media (max-width: ${props => props.theme.screen.tablet}){
            display: block;
            position: absolute;
            top: 60px;
            right: 26px;
            padding: 20px;
            z-index: 1;
            background: ${props => props.theme.colors.indigo};
            box-shadow: 0px 2px 5px rgba(0,0,0,.2);
            border-radius: 10px;
            opacity: 0;
            transform: translateY(10px);
            pointer-events: none;
            transition-duration: ${props => props.theme.transition.duration};
            transition-timing-function: ${props => props.theme.transition.timing};
            ul {
                grid-gap: 7px;
            }
            ${props => props.active && css`
                opacity: 1;
                transform: translateY(0px);
                pointer-events: all;
            `}
        }
    `}
    
`

const StyledNavList = styled.ul`
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
`

const Nav:FC<NavProps> = ({ aside, menu, active }) => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const nav = [
        { title: "Дашборд", icon: DashboardIcon, slug: "" },
        { title: "Биржа активности", icon: ActivityExchangeIcon, slug: "activity-exhange" },
        { title: "Биржа блогеров", icon: ExchangeBloggersIcon, slug: "bloggers-exhange" },
        { title: "Взаимопиар", icon: PrIcon, slug: "mutual-pr" },
        { title: "Моя структура", icon: StructureIcon, slug: "structure" },
        { title: "Магазин", icon: ShopIcon, slug: "shop" },
        { title: "Марафон", icon: MarathoneIcon, slug: "marathone" },
        { title: "Лендинги", icon: LandingsIcon, slug: "landings" }
    ]

    return (
        <StyledNav aside={aside} menu={menu} active={active}>
            <StyledNavList>
                { nav.map((item, index) => (<NavLink key={index} active={+(splitLocation[1] === item.slug && true)} {...item} />)) }
            </StyledNavList>
        </StyledNav>
    )
}

export default Nav;
