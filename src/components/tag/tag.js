import React from 'react';
import {
    Badge
} from 'reactstrap';
import PropTypes from 'prop-types';

class Tag extends React.Component {
    popularityText(popularity){
        switch (true) {
            case (popularity >= 80):
                return 'Hot';
            case (popularity >= 60 && popularity <= 79):
                return 'Cool';
            case (popularity >= 30 && popularity <= 59):
                return 'Regular';
            default:
                return 'Underground';
        }
    }

    render() {
        const { popularity } = this.props;
        return (
            <Badge color="success" pill>{this.popularityText(popularity)}</Badge>
        );
    };
};

Tag.propTypes = {
    popularity: PropTypes.number
};

export default Tag;