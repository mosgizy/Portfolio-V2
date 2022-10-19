import styled, { css } from 'styled-components';
import { TABLET } from '../resources/constants/screenSize';

export const HomeContainer = styled.section`
    padding-block-start: 200px;
    transition: all var(--transition);
    overflow:hidden;

    @media only screen and (min-width:${TABLET}){
        display:grid;
        place-items: center;
        height: 100vh;
        padding-block-start: unset;
    }
`

export const HomeWrapper = styled.div`
    height: 60vh;
    width: 100%;
    position:relative;
    overflow:hidden;

    @media only screen and (min-width:${TABLET}){
        height:80vh;
    }
`

export const BannerWrapper = styled.div`
    width: 100%;
    height: 100%;

    background-image: url('/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .overlay{
        height:100%;
        width: 100%;
        background-image: linear-gradient(90deg, 
            rgba(45, 45, 58, 0.9) 15%, 
            rgba(45, 45, 58, 0.7) 50%, 
            rgba(43, 43, 53, 0.7) 100%);
    }
`

export const BannerContent = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height:100%;
    transform: translate(-50%,-50%);
    z-index:15;
    text-align:center;
    padding-inline:1rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    z-index:2;
    overflow:hidden;
    
    p{
        color:var(--header-text-color);
        font-size:16px;
        font-family: 'Courier Prime', monospace;

        i{
            color:var(--secondary-color);
        }

        span{
            padding-inline: .5rem;
        }
    }

    h1{
        max-width:20ch;
    }

    @media only screen and (min-width:${TABLET}){
        padding-inline:2rem;
    }
`

export const Buttton = styled.button`
    background-color:var(--secondary-color);
    color: var(--btn-color);
    outline: none;
    border: none;
    padding: 1rem 2.2rem;
    font-size: 11px;
    letter-spacing: 1.5px;
    font-weight:600;
    text-transform: uppercase;
    transition:transform var(--transition);
    cursor: pointer;

    :hover{
        transform: translateY(-3%) ;
    }
`