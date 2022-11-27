import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setIsLogged, setRole } from '../../utils/store/store';

import { Button, Error, FormStyle, Input } from './Form.styles';
import axios from 'axios';
type IBoolean = {
  boolean: boolean;
};
type IForm = {
  email: string;
  nickName?: string;
  password: string;
};
const Form = (boolean: IBoolean) => {
  const [regexEmail, setRegexEmail] = useState<boolean>(true);
  const [regexPassword, setRegexPassword] = useState<boolean>(true);
  const [regexNickName, setRegexNickName] = useState<boolean>(true);
  const [regexConfirmPassword, setRegexConfirmPassword] =
    useState<boolean>(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (boolean.boolean) {
      const formData: IForm = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      axios
        .post('http://localhost:5000/api/auth/signin', formData)
        .then((res) => {
          console.log(res.data);
          dispatch(setToken(res.data.token));
          dispatch(setIsLogged(true));
          dispatch(setRole(res.data.role));
          navigate('/Park');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const formData: IForm = {
        email: e.target.email.value,
        nickName: e.target.nickName.value,
        password: e.target.password.value,
      };

      axios
        .post('http://localhost:5000/api/auth/signup', formData)
        .then((res) => {
          console.log(res);

          navigate('/Home');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleRegex = (e: any) => {
    if (e.target.name === 'email') {
      const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      if (regex.test(e.target.value)) {
        setRegexEmail(true);
        e.target.style.border = '1px solid green';
      } else {
        setRegexEmail(false);
        e.target.style = 'border: 1px solid red';
      }
    }

    if (e.target.name === 'nickName') {
      const regex = /^[a-zA-Z0-9]{4,12}$/;
      if (regex.test(e.target.value)) {
        setRegexNickName(true);
        e.target.style.border = '1px solid green';
      } else {
        setRegexNickName(false);
        e.target.style = 'border: 1px solid red';
      }
    }

    if (e.target.name === 'password') {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (regex.test(e.target.value)) {
        setRegexPassword(true);
        e.target.style.border = '1px solid green';
      } else {
        setRegexPassword(false);
        e.target.style = 'border: 1px solid red';
        // add error message below input
      }
    }

    if (e.target.name === 'confirm-password') {
      if (e.target.value === e.target.parentElement.password.value) {
        setRegexConfirmPassword(true);
        e.target.style.border = '1px solid green';
      } else {
        setRegexConfirmPassword(false);
        e.target.style = 'border: 1px solid red';
      }
    }
  };

  if (boolean.boolean === true) {
    return (
      <FormStyle action="submit" onSubmit={(e) => handleSubmit(e)}>
        <Input type="text" name="email" autoComplete="on" placeholder="Email" />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
        <Button type="submit">Sign In</Button>
      </FormStyle>
    );
  } else {
    return (
      <FormStyle action="submit" onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          name="email"
          autoComplete="on"
          placeholder="Email"
          onInput={(e) => handleRegex(e)}
        />
        {/* if regex is false return error message div */}
        {regexEmail === false ? <Error>Please enter valid email </Error> : null}
        <Input
          type="text"
          name="nickName"
          autoComplete="on"
          placeholder="Nickname"
          onInput={(e) => handleRegex(e)}
        />
        {regexNickName === false ? (
          <Error>
            Type a minimum of 4 characters with out special characters
          </Error>
        ) : null}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          onInput={(e) => handleRegex(e)}
        />
        {regexPassword === false ? (
          <Error>
            Password requirement are one capital letter , 8 characters and one
            digit number
          </Error>
        ) : null}
        <Input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          autoComplete="new-password"
          onInput={(e) => handleRegex(e)}
        />
        {regexConfirmPassword === false ? (
          <Error>Your password dont match</Error>
        ) : null}
        {regexEmail === true &&
        regexNickName === true &&
        regexPassword === true &&
        regexConfirmPassword === true ? (
          <Button type="submit">Sign Up</Button>
        ) : (
          <Button disabled className="low-opacity">
            Sign Up
          </Button>
        )}
      </FormStyle>
    );
  }
};

export default Form;
