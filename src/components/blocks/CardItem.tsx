import { FC, useState } from 'react';
import styled from 'styled-components'

type PartnerProps = {
    name: string;
    image: string;
}

type CardItemProps = {
    key: string;
    id: string;
    payoutLevel: string;
    partners: PartnerProps[];
    index: number;
}

const StyledCardItem = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.darkIndigo};
    padding: 20px;
    border-radius: 10px;
    height: 30vh;
    min-height: 230px;
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    @media (max-width: ${props => props.theme.screen.phone}){
        padding: 12px;
        grid-gap: 10px;
    }
`

const StyledCardItemHeadPart = styled.div`
    display: grid;
    line-height: 100%;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    &:last-child {
        border-top: 1px solid rgba(255,255,255,.1);
        padding-top: 7px;
        margin-top: 6px;
    }
    b {
        font-size: 18px;
        @media (max-width: ${props => props.theme.screen.phone}){
            font-size: 14px;
        }
    }
    span {
        font-size: 10px;
        color: rgba(255,255,255,.7);
        @media (max-width: ${props => props.theme.screen.phone}){
            font-size: 9px;
        }
    }
`

const StyledCardItemHead = styled.div`
`

const StyledCardItemPartners = styled.ul`
    overflow-y: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    padding-bottom: 2px;
    &::-webkit-scrollbar {
        width: 1px;
        background: ${props => props.theme.colors.darkBlue};
    }
    
    &::-webkit-scrollbar-thumb{
        background: ${props => props.theme.colors.grey};
    }
`

const StyledCardItemPartner = styled.li`
    cursor: pointer;
    opacity: .6;
    display: flex;
    align-items: center;
    grid-gap: 8px;
    transition-duration: ${props => props.theme.transition.duration};
    &:hover {
        opacity: 1;
    }
    img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        object-fit: cover;
        border: 1px solid ${props => props.theme.colors.grey};
    }
    p{
        font-size: 9px;
    }
`

const CardItem:FC<CardItemProps> = ({ payoutLevel, partners }) => {
    return (
        <StyledCardItem>
            <StyledCardItemHead>
                <StyledCardItemHeadPart>
                    <b>{ payoutLevel }</b>
                    <b>{ partners.length }</b>
                </StyledCardItemHeadPart>
                <StyledCardItemHeadPart>
                    <span>Уровень<br /> выплат</span>
                    <span>Активных<br/> партнёров</span>
                </StyledCardItemHeadPart>
            </StyledCardItemHead>
            <StyledCardItemPartners>
                { partners.map((partner, index) => 
                <StyledCardItemPartner key={index}>
                    <img src={partner.image} />
                    <p>{partner.name}</p>
                </StyledCardItemPartner>) }
            </StyledCardItemPartners>
        </StyledCardItem>
    )
}

export default CardItem;