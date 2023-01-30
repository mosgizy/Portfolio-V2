import styled from 'styled-components';
import { TABLET,MOBILE_SCREEN,LARGE_SCREEN,DESKTOP } from '../resources/constants/screenSize';

export const PortfolioWrapper = styled.section` 
    overflow-y: scroll;
    height: 100vh;
    margin-block: 75px 8rem;

    @media only screen and (min-width:${TABLET}){
        margin-block: unset;
    }
`

export const NavWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-block-start: 1.6rem;
    
    @media only screen and (min-width:768px){
        flex-direction: row;
        justify-content: flex-start;
        padding-block-start:2rem ;
    }
`

export const NavElement = styled.li<{active:boolean}>`
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 10px;
    text-transform: uppercase;
    cursor: pointer;
    width: 100%;
    text-align: center;
    transition: color var(--transition);
    /* color: ${({active}) => active ? 'var(--header-text-color)' : ''}; */
    
    :hover{
        color: var(--header-text-color);
    }

    @media only screen and (min-width:${TABLET}){
        width:unset;
    }
`

export const PortfolioContainer = styled.div`
    margin-block: 1.5rem 6rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media only screen and (min-width:768px){
        flex-direction: row;
        flex-wrap: wrap;
        margin-block-end: 2rem;

        > * {
            flex: 0 0 calc(50% - 0.8rem);
        }
    }

    @media only screen and (min-width:${LARGE_SCREEN}){
        > * {
            flex: 0 0 calc(33% - 0.8rem);
        }
    }
`

export const Projectcard = styled.div`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 250px;
    border-radius: .4rem;
    box-shadow:  10px 15px 12px 1px rgba(0,0,0,0.4);

    @media only screen and (min-width:${MOBILE_SCREEN}){
        &:hover{
            > div{
                transform: translateY(0);
            }
        }
    }

    img{
        opacity: 0.9;
        object-fit: cover;
        transition: all var(--transition);

        :hover{
            scale: 1.05;
            opacity: 1;
        }
    }
`;

export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    background: linear-gradient(159deg, 
        rgba(45, 45, 58, 0.98) 0%, 
        rgba(43, 43, 53, 0.98) 100%);
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    padding:1rem;
    width: 100%;
    position:absolute;
    bottom: 0;
    transition: transform var(--transition);
    
    
    @media only screen and (min-width: ${MOBILE_SCREEN}) {
        transform: translateY(180px);
    }

    @media only screen and (min-width: ${DESKTOP}) {
        transform: translateY(180px);
    }

    h5{
        font-size: 14px;
        font-weight: 600;
        ::first-letter{
            text-transform: uppercase;
        }
    }

    a{
        color: var(--secondary-color);
        text-transform:uppercase;
        font-size:9px;
        font-weight: 600;
        letter-spacing: 1.5px;
        position: relative;

        ::before{
            position: absolute;
            font-family: "Font Awesome 5 free";
            content: '\f054';
            font-weight: 900;
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            font-size: 9px;
            top: 0.3px;
            transform: translateX(5px);
            transition: 0.4s ease-in-out;
        }
    }    
`