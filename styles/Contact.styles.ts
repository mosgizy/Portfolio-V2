import styled from 'styled-components';
import { TABLET,DESKTOP } from '../resources/constants/screenSize';
import { Buttton } from './Home.styles';

export const ContactWrapper = styled.section`
    overflow-y: scroll;
    height: 100vh;
    margin-block-start: 75px;
    padding-block-end: 7rem;
     > h4{
        margin-block: var(--padding);
        text-align: center;
        ::first-letter{
            text-transform: uppercase;
        }

        @media only screen and (min-width:${TABLET}){
            text-align: left;
        }
    }

    @media only screen and (min-width:${TABLET}){
        margin-block-start: unset;
        padding-block-end: 2rem;
    }
`

export const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;     

    @media only screen and (min-width:${DESKTOP}){
        flex-direction: row;
    }
`

export const Wrapper = styled.div`
    background: var(--box-bg);
    box-shadow: var(--box-shadow);
    padding: var(--padding);
    width: 100%;
`

export const InfoContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-block:15px;
`

export const Info = styled.li`
    display: flex;
    justify-content: space-between;

    > *::first-letter{
        text-transform: uppercase;
    }

    span{
        text-align: right;
    }
`

export const FormGroup = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const Inputwrapper = styled.div`
    
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    background-color: var(--btn-color);
    position: relative;
    
    input,textarea{
        width: 100%;
        padding-block: 1rem;
        padding-inline: 3.8rem .8rem;
        background: linear-gradient(159deg, #252532 0%, #23232d 100%);
        box-shadow: inset 0 1px 4px 0 rgba(15, 15, 20, 0.1);
        border: none;
        outline: none;
        color: var(--primary-color);
        text-transform: capitalize;

        :focus{
            outline: none;
        }

        :focus + label{
            background: var(--secondary-color);
            color:var(--btn-color);
        }
    }

    label{
        position:absolute;
        left:0;
        padding: 1rem 1.2rem;
        background-color: var(--btn-color);
        height: 100%;
        transition:all var(--transition);

        svg{
            font-size:1rem;
            width: 10px;
        }
    }

    textarea{
        height:150px;
    }
`

export const BtnWrapper = styled.div``

export const SubmitBtn = styled(Buttton)`

`