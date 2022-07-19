import React from 'react';
import styled from 'styled-components';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Pinterest from '@material-ui/icons/Pinterest';
import Room from '@material-ui/icons/Room';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import { mobile } from "../responsive";

const Container = styled.div`

    display: flex;
    ${mobile({ flexDirection: "column" })}

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItems = styled.li`

    width: 50%;
    margin-bottom: 10px;

`;

const Right = styled.div`
    flex: 1;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: all 1s ease;
    }
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>A-Z SHOP</Logo>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod amet provident laudantium autem, fugiat cupiditate debitis facilis, dolor odio ut vero maiores! Nisi modi molestiae fugit hic earum, quo fuga?</Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>Man</ListItems>
                    <ListItems>Women</ListItems>
                    <ListItems>Fashion</ListItems>
                    <ListItems>Accessories</ListItems>
                    <ListItems>My account</ListItems>
                    <ListItems>Wishlist</ListItems>
                    <ListItems>Terms</ListItems>
                </List>
            </Center>
            <Right>

                <Title>Contact</Title>
                <ContactItem> <Room style={{ marginRight: "10px" }} /> Lebanon,Nabatieh Hassan Kamel Al Sabbah Street</ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} /> +961 76656760</ContactItem>
                <ContactItem><Email style={{ marginRight: "10px" }} />A-Zshop.services@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
            </Right>
        </Container>
    );
};

export default Footer;