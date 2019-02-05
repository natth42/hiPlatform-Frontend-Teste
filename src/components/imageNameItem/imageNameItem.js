import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import './imageNameItem.scss';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

export const ImageNameItem = ({
    images,
    name
}) => {
    return (
        <Container>
            <Row>
                <Col xs="auto">
                    {
                        images.length > 0 ?
                            <img src={images[0].url} alt="" height="64" width="64" />
                            :
                            <FontAwesomeIcon icon={faCompactDisc} className="iconDisc" />
                    }
                </Col>
                <Col>
                    {name}
                </Col>
            </Row>
        </Container>
    );
};

ImageNameItem.propTypes = {
    name: PropTypes.string,
    images: PropTypes.array
};