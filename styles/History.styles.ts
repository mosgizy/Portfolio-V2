import styled from 'styled-components';
import { TABLET, DESKTOP } from '../resources/constants/screenSize';

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
    gap: 2rem;

    ::before{
        content:"";
        position: absolute;
        background-color: #191923;
        right: 8.3px;
        top: 0;
        bottom: 0;
        width: 5px;
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
        height: 10px;
        top:10%;
    }

    ::before {
        right: -5px;
        background-color: inherit;
        transform: rotate(45deg);
    }     
    
    .ring{
        position: absolute;
        right:-2.95rem;
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