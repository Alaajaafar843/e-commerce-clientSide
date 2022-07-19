import { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { signup } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  position:relative ;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled{
    background-color: black;
    cursor: not-allowed;
  }
`;
const Error = styled.span`
  color: red;
`;

const Register = () => {

  const navigate = useNavigate();

  const { isFetching, error } = useSelector(state => state.user);
  console.log(isFetching, error);
  const dispatch = useDispatch();

  const [inputValues, setInputValue] = useState({
    fName: "",
    lName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!inputValues.fName.trim()) {
      errors.fName = "First name is required";
    } else {
      errors.fName = "";
    }
    //last Name validation
    if (!inputValues.lName.trim()) {
      errors.lName = "Last name is required";
    } else {
      errors.lName = "";
    }
    //last Name validation
    if (!inputValues.username.trim()) {
      errors.username = "username is required";
    } else {
      errors.username = "";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.Password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.password = "";
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(dispatch, {
      username: inputValues.username,
      email: inputValues.email,
      password: inputValues.password
    })
    if (!error) {
      navigate('/login');
    }
  };



  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input name="fName" required type="text" placeholder="name" onChange={(e) => handleChange(e)}
            value={inputValues.fName} />
          <Error>{validation.fName && <Error>{validation.fName}</Error>}</Error>
          <Input name="lName" required type="text" placeholder="last name" onChange={(e) => handleChange(e)}
            value={inputValues.lName} />
          <Error>{validation.lName && <Error>{validation.lName}</Error>}</Error>
          <Input name="username" required type="text" placeholder="username" onChange={(e) => handleChange(e)}
            value={inputValues.username} />
          <Error>{validation.username && <Error>{validation.username}</Error>}</Error>
          <Input name="email" required type="email" placeholder="email" onChange={(e) => handleChange(e)}
            value={inputValues.email} />
          <Error> {validation.email && <Error>{validation.email}</Error>}</Error>
          <Input name="password" required type="password" placeholder="password" onChange={(e) => handleChange(e)}
            value={inputValues.password} />
          <Error>{validation.password && <Error>{validation.password}</Error>}</Error>
          <Input name="confirmPassword" required type="password" placeholder="confirm password" onChange={(e) => handleChange(e)}
            value={inputValues.confirmPassword} />
          <Error>{validation.confirmPassword && <Error>{validation.confirmPassword}</Error>}</Error>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
            <Link to="/login">
              Already have an account ?
            </Link>
          </Agreement>
          {error && <Agreement style={{ color: "red" }}>
            Something went wrong. Please try again!
          </Agreement>}
          <Button disabled={isFetching} >CREATE</Button>
        </Form>
      </Wrapper>
    </Container >
  );
};

export default Register;