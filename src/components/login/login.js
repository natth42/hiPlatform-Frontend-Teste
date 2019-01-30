import React, { Fragment } from 'react';
import { Container, Button } from 'reactstrap';
import Header from '../header/header';
import './login.scss';

const Login = () => {
    const urlSpotify = 'https://accounts.spotify.com/authorize?client_id=29c9f66e9a314c38858dd3fe2ffe35cd&response_type=token&redirect_uri=http://localhost:3000/home';
    return (
        <Fragment>
        <Header />
        <Container className="center title-position">
              <h2 className="space-top" aria-level="1" aria-label="Não achamos a página que está procurando!">
                Olá, para usar está aplicação é necessário entrar na sua conta do Spotify!
              </h2>
              <h4>É rapidinho, é só clicar no botão abaixo.</h4>
        </Container>
        <Container className="center">
            <Button className="buttonSpotify" onClick={() => window.location = urlSpotify} color="success">Entrar na sua conta Spotify!</Button>
        </Container>
      </Fragment>
    );
  }

export default Login;