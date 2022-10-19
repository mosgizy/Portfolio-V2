import styled, { css } from 'styled-components';
import { TABLET } from '../resources/constants/screenSize';

interface navInterfaces { 
    active?: boolean;
    width?: string;
    right?: string;
    left?: string;
    translateX?: string;
    nav?:boolean;
}

export const NavContainer = styled.div`

`

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline:30px;
    background-color: var(--btn-color);
    box-shadow: var(--box-shadow);
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;

    @media only screen and (min-width:${TABLET}){
        display: none;
    }
`

export const NavIcon = styled.div<navInterfaces>`
    width: 20px;
    cursor: pointer;
    transform: ${({ active,translateX }) => active === false && `translateX(${translateX}px)`};
    transition: transform 2.25s cubic-bezier(0.075, 0.82, 0.165, 1);

    :hover > * {
        color: var(--header-text-color);
    }

    > *{
        width: 20px;
        height: 20px;
        transition: color var(--transition);
    }
`

export const NavContentWrapper = styled.div``

export const NavContent = styled.div<navInterfaces>`
    background-color:var(--btn-color);
    position: absolute;
    right: ${({ right }) => right};
    left: ${({left}) => left};
    top: 0;
    width: ${({width}) => `${width}px`};
    min-height: 100vh;
    z-index: 99;
    transform: ${({active,translateX}) => active && `translateX(${translateX}px)`};
    transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);

    @media only screen and (min-width:${TABLET}){
        ${({ nav,active }) => nav && css`
            transform: ${active ? `translateX(140px)` : `translateX(0px)`};
            transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);
        `}
    }
`

export const NavContentHeader = styled.div`
    font-size: 1.2rem;
    background:linear-gradient(159deg, 
    rgba(37, 37, 50, 0.98) 0%, 
    rgba(35, 35, 45, 0.98) 100%);
    height: 70px;
    display: flex;
    align-items: center;
    padding-inline:var(--padding);
    width: 100%;
    
    > *{
        transition: color var(--transition);
        cursor: pointer;

        :hover {
            color: var(--header-text-color);
        }
    }

    @media only screen and (min-width:${TABLET}){
        padding-inline-start: 2.3rem !important;
    }
`

export const CurrentPage = styled.div<navInterfaces>`
    display: none;
    @media only screen and (min-width:${TABLET}){
        display: block;
        font-size: 11px;
        writing-mode: tb;
        padding:2rem 2.3rem;
        text-transform:uppercase;
        opacity: ${({ active }) => active ? `1` : `0`};
        transition: all var(--transition);
    }
`

export const NavItemWrapper = styled.ul<navInterfaces>`
    padding-inline:30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    min-height: 60vh;

    @media only screen and (min-width:${TABLET}){
        transform: ${({ active }) => active ? `translateX(70px)` : `translateX(0px)`};
        transition: transform 1s ease-in-out;
    }

    .active {
        color:var(--header-text-color);
    }

`



export const NavItem = styled.li`
    text-transform: uppercase;
    font-size: var(--small-font);
    transition: color var(--transition);

    :hover {
        color:var(--header-text-color);
    }
`