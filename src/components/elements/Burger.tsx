import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components'

type BurgerProps = {
    clickOutside: () => void;
    click: () => void;
}

const StyledBurger = styled.button`
    display: none;
    border: none;
    position: relative;
    transition-duration: .6s;
    transition-timing-function: ease;
    &:before, &:after, span{
        width: 30px;
        height: 2px;
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        content: '';
        bottom: 0;
        margin: auto;
        will-change: transform;
        transform-origin: left;
        transition-duration: inherit;
        transition-timing-function: inherit;
    }
    &:before{
        transform: translateY(-9px);
    }
    span{
        transform: scaleX(.6);
    }
    &:after{
        transform: translateY(9px) scaleX(.3);
    }
    @media (max-width: ${props => props.theme.screen.tablet}){
        background: none;
        width: 36px;
        height: 36px;
        display: block;
        &:before, &:after, span{
            transform-origin: right;
        }
        &:before{
            transform: translateY(-6px) scaleX(.5);
        }
        span{
            transform: scaleX(.6);
        }
        &:after{
            transform: translateY(6px) scaleX(.3);
        }
    }
`

const Burger:FC<BurgerProps> = ({ clickOutside, click }) => {
    const burgerRef = useRef<HTMLButtonElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if(burgerRef.current && !e.composedPath().includes(burgerRef.current)){
                setTimeout(() => {
                    clickOutside();
                }, 300)
            }
        }
        document.body.addEventListener("click", handleClickOutside);
        return () => document.body.removeEventListener("click", handleClickOutside);
    }, [])

    return (
        <StyledBurger ref={burgerRef} onClick={click}>
            <span></span>
        </StyledBurger>
    )
}

export default Burger;