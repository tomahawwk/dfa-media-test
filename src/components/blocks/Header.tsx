import { FC, useState } from 'react';
import styled from 'styled-components';

import { Flex } from '../helpers';
import { FadeYUp } from '../helpers/Animations';

import { Nav } from '../blocks';

import { Logo, Burger, Button } from '../elements';

type HeaderProps = {
    authOpen: boolean;
    setAuthOpen: (open: boolean) => void;
}

const StyledHeader = styled(Flex)`
    padding: 0 10px;
    button {
        animation: ${FadeYUp} .5s ${props => props.theme.transition.function} forwards;
        opacity: 0;
        &:first-child {
            animation-delay: .3s;
        }
        &:last-child {
            animation-delay: .4s;
        }
    }
`

const Header:FC<HeaderProps> = ({ authOpen, setAuthOpen }) => {
    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    return (
        <StyledHeader justify="space-between" align="center" gap="20px" width="100%">
            <Logo />
            <Flex align="center">
                <Button primary={true} small={true} onClick={() => { setAuthOpen(!authOpen) }} >Войти</Button>
                <Burger click={() => setMenuOpened(!menuOpened)} clickOutside={() => setMenuOpened(false)}/>
            </Flex>
            <Nav menu={true} active={menuOpened} />
        </StyledHeader>
    )
}

export default Header;
