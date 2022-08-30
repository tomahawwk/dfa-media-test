import styled from 'styled-components'

export default styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 30px;
    @media (max-width: ${props => props.theme.screen.desktop}){
        grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: ${props => props.theme.screen.desktopMin}){
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: ${props => props.theme.screen.tabletMin}){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    @media (max-width: ${props => props.theme.screen.phone}){
        grid-gap: 10px;
    }
`;