import { Button } from 'components/elements';
import { FC } from 'react';
import styled from 'styled-components';

type AuthModalProps = {
    authOpen: boolean;
    setAuthOpen: (open: boolean) => void;
}

const StyledAuthModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    margin: auto;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const StyledAuthModalOverlay = styled.div`
    background: rgba(0,0,0,.4);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition-duration: .6s;
`

const StyledAuthModalContent = styled.div`
    width: 300px;
    z-index: 1;
    border-radius: 20px;
    position: relative;
    padding: 30px;
    background: ${props => props.theme.colors.indigo};
    height: 80vh;
    transition-duration: ${props => props.theme.transition.duration};
    transition-timing-function: ${props => props.theme.transition.timing};
    box-shadow: -2px 0px 10px rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: ${props => props.theme.screen.phone}){
        width: 100%;
        padding: 16px;
    }
`

const StyledAuthModalClose = styled.button`
    width: 16px;
    height: 16px;
    position: relative;
    background: none;
    position: absolute;
    top: 20px;
    right: 20px;
    opacity: .7;
    will-change: transform;
    transition-duration: ${props => props.theme.transition.duration};
    transition-timing-function: ${props => props.theme.transition.timing};
    cursor: pointer;
    @media (max-width: ${props => props.theme.screen.phone}){
        top: 16px;
        right: 16px;
    }
    &:hover {
        transform: scale(1.1);
        opacity: 1;
    }
    &:before, &:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: white;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }   
`

const StyledAuthModalPart = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 40px;
    @media (max-width: ${props => props.theme.screen.phone}){
        grid-gap: 25px;
    }
    p {
        font-size: 20px;
        font-family: ${props => props.theme.fonts.secondary};
    }
`

const StyledAuthModalFields = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    input {
        width: 100%;
        background: none;
        padding: 10px 0px;
        color: white;
        outline: none;
        border-bottom: 1px solid ${props => props.theme.colors.grey};
        @media (max-width: ${props => props.theme.screen.phone}){
            font-size: 14px;
        }
        &::placeholder{
            color: ${props => props.theme.colors.grey};
        }
    }
`

const AuthModal:FC<AuthModalProps> = ({ authOpen, setAuthOpen }) => {
    return (
        <StyledAuthModal>
            <StyledAuthModalOverlay className="overlay" onClick={() => { setAuthOpen(!authOpen) }} />
            <StyledAuthModalContent className="content">
                <StyledAuthModalClose onClick={() => { setAuthOpen(!authOpen) }} />
                <StyledAuthModalPart>
                    <p>Авторизация</p>
                    <StyledAuthModalFields>
                        <input type="text" placeholder="Имя" />
                        <input type="text" placeholder="Пароль" />
                    </StyledAuthModalFields>
                </StyledAuthModalPart>
                <Button primary={true}>Вход</Button>
            </StyledAuthModalContent>
        </StyledAuthModal>
    )
}

export default AuthModal;