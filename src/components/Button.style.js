import styled from "styled-components"

export const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: ${(props)=>props.couleurfond};
    border-radius: 10px;
    &:hover{
        background-color: coral;
    }
    &:active{
        background-color: darkblue;
    }
`
export const RedButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: red;
    border-radius: 10px;
    text-decoration: underline;
    text-transform: uppercase;
`

export const ButtonLabel = styled.label`
    font-size: 25px;
    color: white;
    &:hover{
        color: black
    }
`

export const SubmitButton = 
    styled.input.attrs({type : "submit"})`
        width: 200px;
        height: 50px;
        background-color: red;
        border-radius: 10px;
        text-decoration: underline;
        text-transform: uppercase;
`

