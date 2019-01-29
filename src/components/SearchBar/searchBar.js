import React, { Fragment } from 'react';
import {
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const SearchBar = () => {
  return (
    <Fragment>
        <FormGroup className="space-top space-sides">
            <Label for="search" hidden>Procurar</Label>
            <Input className="input" type="text" name="search" id="search" placeholder="Procurar por nome" />
        </FormGroup>
        <div className="center">
            <a className="space-sides">Artista</a>
            <a className="space-sides">Album</a>
            <a className="space-sides">Música</a>
        </div>
    </Fragment>
  );
}

export default SearchBar;