import styled, { createGlobalStyle, css,keyframes } from 'styled-components';
import { TABLET } from '../resources/constants/screenSize';

const GlobalStyle = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Poppins:wght@400;700&display=swap'); */

    *,
    *::before,
    *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    :root{
        --primary-color:#8c8c8e;
        --secondary-color:#ffc107;
        --btn-color:#20202a;
        --header-text-color:#fafafc;
        --divider-color:rgba(100,100,102,0.3);
        --bg-color:#1e1e28;

        --box-bg:linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
        --bg-overlay:linear-gradient(180deg, 
            rgba(30, 30, 40, 0.93) 0%, 
            rgba(30, 30, 40, 0.96) 70%, 
            rgba(30, 30, 40, 0.99) 80%, 
            #1e1e28 100%);

        --box-shadow: 0 3px 8px rgba(15, 15, 20, 0.2);

        --transition:.4s ease-in-out;

        --small-font:11px;

        --padding:30px;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 300;
        color: var(--primary-color);
        height: 100vh;
        background: var(--bg-color);
        overflow-x: hidden;
        line-height: 1.5;
        letter-spacing:0.5px;
    }

    img{
        max-width: 100%;
    }

    button{
        color:inherit;
        font-family: inherit;
    }

    a{
        text-decoration:none;
        color: inherit;
    }

    h1,h2,h3,h4,h5,h6{
        color:var(--header-text-color);
    }

    h1{
        font-size: 46px;
        font-weight: 800;
    }

    h4{
        font-size: 17px;
        font-weight: 600;
    }

    h5{
        font-size:14px;
        font-weight: 600;
    }

    h6{
        font-size: 12px;
        font-weight: 400;
    }

    ul{
        list-style-type:none;
    }

    a{
        text-decoration:none;
    }

    button{
        font-family: inherit;
    }
`

interface overlayInterface{
    active: boolean;
}

export const Overlay = styled.div<overlayInterface>`
    transition: background-color var(--transition);
    ${({ active }) => active === false && css`
        position: absolute;
        inset: 0;
        min-height: 100vh;
        background-color: rgba(30,30,40,0.88);
        z-index: 20;
    `}
`

export const SectionWrapper = styled.div<overlayInterface>`
    position:relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);

    @media only screen and (min-width:${TABLET}){
        padding-inline: 18.2rem 5.7rem;
    }
    
    ${({ active }) => active && css`
        @media only screen and (min-width:${TABLET}){
            transform: translateX(-140px);
        }
    `}
`

export const SectionBackground = styled.div`
    position:absolute;
    width: 100%;
    height: 400px;

    background-image: url('/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -2;

    .overlay{
        position: relative;
        height:100%;
        width: 100%;
        background-image: linear-gradient(180deg, 
            rgba(30, 30, 40, 0.93) 0%, 
            rgba(30, 30, 40, 0.96) 70%, 
            rgba(30, 30, 40, 0.99) 80%, 
            #1e1e28 100%);
        z-index: -1;
    }
`

export const SectionContainer = styled.div`
    padding-inline:1rem;
    overflow-y:scroll ;

    @media only screen and (min-width:${TABLET}){
        padding-inline:2rem ;
    }
`


const animloader = keyframes`
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`

export const LoaderWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:.5rem;
    position:absolute;
    inset:0;
    z-index:9999;
    background:linear-gradient(159deg, 
        rgba(37, 37, 50, 0.98) 0%, 
        rgba(35, 35, 45, 0.98) 100%);

    p{
        text-transform:capitalize;
        font-size:1.5rem;
        color:white;
    }
`

export const LoaderAnimation = styled.div`
    width: 48px;
    height: 48px;
    position: relative;

    &::before,&::after {
        content: '';  
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid var(--secondary-color);
        position: absolute;
        left: 0;
        top: 0;
        animation: ${animloader} 2s linear infinite;
    }

    &::after{
        animation-delay: 1s;
    }
`
export default GlobalStyle;