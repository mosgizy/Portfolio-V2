import styled, { css } from 'styled-components';
import { MOBILE_SCREEN, TABLET } from '../resources/constants/screenSize';

export const SidebarContentWrapper = styled.div`
    overflow: hidden;
    height: 100%;

    @media only screen and (min-width:${TABLET}){
        > div {
            transform: translateX(0)
        }
    }
`

export const SidebarHeader = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    background:linear-gradient(159deg, 
        rgba(37, 37, 50, 0.98) 0%, 
        rgba(35, 35, 45, 0.98) 100%);
    padding:var(--padding);
    z-index:30;

    .toggle{
        display: flex;
        justify-content: flex-end;

        @media only screen and (min-width:${TABLET}){
            display: none;
        }
    }
`

const flexCenter = css`
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const SidebarHeaderWrapper = styled.div`
    ${flexCenter}
    justify-content:center;
    gap:1rem;
`

export const SidebarHeaderAvatart = styled.div`
    width:90px;
    height:90px;
    margin:auto;
    position:relative;

    img{
        width:100% !important;
        height:100% !important;
        border-radius: 50%;
    }

    ::before,
    ::after {
        content:"";
        position:absolute;
        bottom:10%;
        right:8%;
        border-radius: 50%;
        z-index:2;
    }

    ::before {
        width:.8rem;
        height:.8rem;
        background-color:var(--secondary-color);
    }

    ::after{
        background-color: rgba(255,255,255,0.4);
        animation: beat 1s linear infinite;
        width: 1.25rem;
        height: 1.25rem;
        right:3%;
        bottom: 6%;
        z-index: 1;
    }

    @keyframes beat {
        0%{
            transform: scale(0.2); 
            opacity:0;
        }

        40%{
            transform: scale(0.5); 
            opacity:0.5;
        }

        80%{
            transform: scale(0.8); 
            opacity:0.8;
        }

        100%{
            transform:scale(1);
            opacity:1;
        }
    }
`

export const SidebarHeaderInfo = styled.div`
    ${flexCenter}
    text-transform:capitalize;
    gap:.5rem;
    text-align:center;

    h5{
        transition: color var(--transition);
        cursor:pointer;

        :hover{
            color:var(--secondary-color);
        }
    }

    div{
        line-height:1.5em;
    }
`

export const SidebarSectionWrapper = styled.div`
    padding-inline: var(--padding);
    padding-block:calc(14rem + 4vh) 4.5rem;
    height: 100vh;
    overflow:scroll;

    @media only screen and (min-width:${MOBILE_SCREEN}){
        padding-block:14.5rem 4.5rem;    
    }

    ::webkit-scrollbar{
        display:none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none; 

    .download {
        text-transform: uppercase;
        margin-block: 1rem;
        display: flex;
        align-items: center;
        gap: .6rem;
        font-size: 10px;
        font-weight: 600;
        transition: color var(--transition);

        svg{
            width: 10px;
            font-weight: 700;
        }

        :hover{
            color: var(--header-text-color);
        }
    }
`

export const SideBarSections = styled.div`
    padding-block: var(--padding);
    border-bottom: 1px solid var(--divider-color);

    ul{
        display: flex;
        flex-direction: column;
        gap: .7rem;
        
    }

    li{
        display: flex;
        justify-content: space-between;
        text-transform: capitalize;
    }

    .skills{
        gap: 1.5rem;
        img{
            width:20px !important;
            height:20px !important;
        }
    }

    .knowledge{
        svg{
            width: 14px;
            color:var(--secondary-color);
            font-weight: 700;
        }

        li{
            justify-content: flex-start;
            gap: .65rem;
        }
    }
`

export const SocialMediaLinks = styled(SidebarHeader)`
    position: absolute;
    bottom: 0;
    top:unset;
    padding-block: 20px;
    
    ul{
        display: flex;
        justify-content: space-between;
    }

    li{
        width:12px;
        cursor: pointer;

        > *{
            transition: all var(--transition);
            :hover {
                color:var(--header-text-color);
                text-shadow:0 0 3px red;
            }
        }
    }

    img{
        width:20px !important;
        height:20px !important;
        color:white;
    }
`