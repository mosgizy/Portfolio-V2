import styled,{css} from 'styled-components';
import { MOBILE_SCREEN } from '../resources/constants/screenSize';

export const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media only screen and (min-width:992px){
        flex-direction: row;
    }
`

export const HistoryContainer = styled.div`
    margin-block-start: 1.5rem;

    > h4 {
        text-transform: capitalize;
        letter-spacing: 1px;
    }
`

export const CardContainer = styled.div`
    margin-block-start: 2rem;
    padding-inline-end: 3rem;
    position: relative;
    display: flex;    
    flex-direction: column;

    @media only screen and (min-width:${MOBILE_SCREEN}){
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap: 0rem 4.5rem;
    }
`

export const CardContainerWrapper = styled.div`
    padding-block-end: 2rem;
    position:relative;

    ::after{
        content:"";
        position: absolute;
        background-color: #191923;    
        top: 0;
        bottom: 0;
        width: 4px;
        z-index:-1;
        right:-2.485rem;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: rgba(43, 43, 53,.98);
    padding:var(--padding);
    position:relative;

    ::before,
    ::after {
        content: '';
        position: absolute;
        width: 10px;
        top:10%;
        height:10px;
        right:-2.485rem;
    }
    
    ::before {
        height: 10px;
        transform: rotate(45deg);
    }   
    
    .ring{
        position: absolute;
        right:-2.9rem;
        top:12px;
        width: 20px;
        height: 20px;
        
        ::after {
            border-radius: 50%;
            content: '';
            border: 3px solid var(--secondary-color);
            width: 15px;
            height: 15px;
            margin:auto;
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
        }

        .beat{
            position: absolute;
            inset: 0;
            background-color: rgba(255,255,255,0.4);
            border-radius: 50%;
            animation: beat 1s linear infinite;
            display: none;
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
    }

    .link{
        text-transform: uppercase;
        color:var(--secondary-color);
        font-size:9px;
        font-weight: 900;
        cursor: pointer;

        :hover{
            .arrow svg{
                width: 1rem;
            }
        }

        .arrow{
            svg{
                width: 8px;
                height:8px;
                transition:width var(--transition);
            }
        }
    }

    :hover .beat{
            display: block;
    }
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: .5rem;
`

export const CardContent = styled.p``

export const Place = styled.div`
    text-transform: capitalize;

    h5{
        margin-block-end: .3rem;
    }
    
    span{
        color: #646466;
        font-style: italic;
        font-size: 11px;
    }

`
export const Date = styled.div`
    background-color: var(--btn-color);
    color: #646466;
    padding: 5px 15px;
    border-radius: 15px;
    box-shadow: inset 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    font-size: 10px;
`

export const Link = styled.div``

export const ModalWrapper = styled.div`
    position:fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding-inline:1rem;
    z-index: 1000;
    display:grid;
    place-items:center;

    .slider-control-centerright,
    .slider-control-centerleft {
        display: none !important;
    }

    .slider-container{
        width: 100%;
        margin: auto;

        img{
            height:100%;
        }
        @media only screen and (min-width: 768px) {
            width:75vw;
        }
    }
`
const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalElement = styled.div`
    width:100%;

    @media only screen and (min-width: ${MOBILE_SCREEN}) {
        width:75vw;
    }
`

export const ModalContent = styled.div`
    aspect-ratio:1;
    ${center}

    > img{
        width:100%;
    }

    @media only screen and (min-width:${MOBILE_SCREEN}) {
        height:85vh;
        width:500px;
    }
`

export const ModalCard = styled.div`
    /* width:100%; */
    /* height:90vh; */
    line-height: 2.5;
    background-color:var(--bg-color);
    padding:2rem;
    overflow:scroll;
`