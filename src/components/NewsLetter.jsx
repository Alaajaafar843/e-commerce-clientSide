import React from 'react';
import styled from 'styled-components';
import Send from '@material-ui/icons/Send';
import { mobile } from "../responsive";

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Descripton = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    letter-spacing: 3px;
    ${mobile({ textAlign: "center" })}
`;

const Title = styled.h1`
    font-size: 70px; 
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width:50%;
    height:40px ;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: teal;
        transition: all 1s ease;
    }
`;


const NewsLetter = () => {
    return (
        <Container>
            <Title>News Letter</Title>
            <Descripton>Get timely update from your favorite products</Descripton>
            <InputContainer>
                <Input placeholder='YOUR EMAIL'></Input>
                <Button>
                    <Send></Send>
                </Button>
            </InputContainer>
        </Container>
    );
};

export default NewsLetter;