import React from 'react';
import PropTypes from 'prop-types';
import './loading.scss';
import {
    Container,
    Spinner
} from 'reactstrap';

export const Loading = ({
    loading
}) => {
    return (
        loading
        &&
        <Container className="center column space-top">
            <Spinner color="success"></Spinner>
            <h4>Carregando!</h4>
        </Container>
    );
};

Loading.propTypes = {
    loading: PropTypes.bool
};