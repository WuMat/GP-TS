import React, { useState } from 'react';
import TitleInfo from '../../components/Title_info/Title_info';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import './_login.scss';

const Login = () => {
  const [registerValues, setRegisterValues] = useState({});

  const inputHandler = (e: any) => {
    const { value, name } = e.target;
    setRegisterValues({ ...registerValues, [name]: value });
  };

  const loginHandler = (e: any) => {
    e.preventDefault();
    console.log('zaloguj');
  };
  return (
    <div className="login">
      <div className="wrapper">
        <div className="login_wrapper">
          <TitleInfo label="Zaloguj się" />
          <div className="login__background">
            <div className="Inputs__wrapper">
              <form>
                <Input
                  type="text"
                  name="name"
                  placeholder="Imię"
                  description="Imię"
                  onChange={inputHandler}
                  color="red"
                />
                <br />
                <Input
                  type="text"
                  name="Password"
                  placeholder="Password"
                  description="Password"
                  onChange={inputHandler}
                  color="red"
                />
                <p className="login__reminder">Nie pamietam hasła</p>
                <div className="login_submit">
                  <Button label="zaloguj" type="submit" size="sm" color="red" />
                </div>
              </form>
            </div>
            <div className="login__registerButton">
              <p>Nie masz jeszcze konta?</p>
              <Link to="/register">
                <Button
                  label="Załóż darmowe konto teraz"
                  color="red"
                  size="bg"
                  type="button"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
