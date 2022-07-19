import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined'
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Info = styled.div`
opacity:0 ;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index:3;
display: flex;
align-items: center;
justify-content: center;
`;

const Container = styled.div`
    flex : 1;
    margin: 5px;
    min-width: 280px;
    height:350px;
    display: flex;
    align-items: center;
    justify-content:center ;
    background-color:#f5fbfd ;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
        transition: all 0.5s ease;
    }
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;

`;

const Icon = styled.div`
width:40px;
height:40px;
border-radius: 50%;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover{
    background-color: #e9f5f5;
    transform:scale(1.1) ;
}
cursor: pointer;
`;

const Product = ({ product }) => {
    return (
        <Container>
            <Circle />
            <Image src={product.img}></Image>
            <Info>
                <Icon>
                    <ShoppingCartOutlined></ShoppingCartOutlined>
                </Icon>
                <Icon>
                    <Link to={`/product/${product._id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined></FavoriteBorderOutlined>
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;