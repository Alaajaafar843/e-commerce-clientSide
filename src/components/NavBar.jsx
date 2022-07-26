import React from 'react';
import styled from 'styled-components';
import Search from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge'
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../redux/userRedux'



const Container = styled.div`
    height:60px ;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding  : 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items:center ;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex:1 ;
    display:flex;
    align-items:center ;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;  
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
    display:flex ;
    border: 0.5px solid lightgray;
    margin-left:25px ;
    padding:5px ;
`;

const Input = styled.input`
    border:none ;
    ${mobile({ width: "50px" })}
`;
const Center = styled.div`
     flex:1 ;
     text-align:center ;
`;
const Logo = styled.h1`
    font-weight:bold ;
    ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
     flex:1 ;
     display: flex ;
     justify-content: flex-end ;
     ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left:25px ;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const NavBar = () => {

    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();

    const quantity = useSelector(state => state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN </Language> <SearchContainer>
                        <Input></Input>
                        <Search style={{ color: "gray", fontSize: 16 }}></Search>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>A-Z shop</Logo>
                </Center>
                <Right>
                    {!user && <Link to='/signup'><MenuItem>REGISTER</MenuItem></Link>}
                    {!user && <Link to='/login'><MenuItem>SIGN IN</MenuItem></Link>}
                    {user && <Link to='/' style={{ textDecoration: "none", color: "black" }}><MenuItem>{user.username.toUpperCase()}</MenuItem></Link>}
                    {user && <MenuItem onClick={() => dispatch(logoutSuccess())} >LOGOUT</MenuItem>}
                    {user && <Link to='/cart' >
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCart></ShoppingCart>
                            </Badge>
                        </MenuItem>
                    </Link>}
                </Right>
            </Wrapper>
        </Container>
    );
};

export default NavBar;