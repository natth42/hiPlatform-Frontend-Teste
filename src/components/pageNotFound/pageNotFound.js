import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Header from '../header/header';

const PageNotFound = () => {
    document.title = "Página não encontrada";
    return (
        <Fragment>
        <Header />
        <Container className="center">
              <h1 className="space-top" aria-level="1" aria-label="Não achamos a página que está procurando!">
                Não achamos a página que está procurando!
                <span role="img" aria-label="carinha triste">😟</span>
              </h1>
        </Container>
      </Fragment>
    );
  }

export default PageNotFound;