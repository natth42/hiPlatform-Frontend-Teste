import React, { Fragment } from 'react';
import { Container, Button } from 'reactstrap';
import { urlSpotify } from '../../utils/constants';
import Header from '../header/header';
import './login.scss';

const Login = () => {
    localStorage.clear();
    document.title = "Login"
    return (
        <Fragment>
            <Header />
            <Container className="center title-position">
                <h2 className="space-top" aria-level="1" aria-label="Olá, para usar está aplicação é necessário entrar na sua conta do Spotify!">
                    Olá, para usar está aplicação é necessário entrar na sua conta do Spotify!
              </h2>
                <h4 aria-label="É rapidinho, é só clicar no botão abaixo.">É rapidinho, é só clicar no botão abaixo.</h4>
            </Container>
            <Container className="center">
                <Button className="buttonSpotify" onClick={() => window.location = urlSpotify} color="success">Entrar na sua conta Spotify!</Button>
            </Container>
        </Fragment>
    );
}

export default Login;