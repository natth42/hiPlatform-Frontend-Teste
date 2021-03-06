import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TypeFilter from '../typeFilter/typeFilter';
import NameFilter from '../nameFilter/nameFilter';
import { connect } from 'react-redux';
import { errorAlert, clearAlert } from '../../actions/index';
import {
    Alert
} from 'reactstrap';

class Filters extends React.Component {

    render() {
        const { alert } = this.props;
        return (
            <Fragment>
                {
                    alert.showMessage
                    &&
                    <div className="space-top space-sides center">
                        <Alert color="danger" aria-label={alert.message}>
                            {alert.message}
                        </Alert>
                    </div>
                }
                <NameFilter />
                <TypeFilter />
                <div className="space-top"></div>
            </Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
        alert: state.alertReducer,
        errorAlert,
        clearAlert
    };
};

Filters.propTypes = {
    alert: PropTypes.array,
    errorAlert: PropTypes.func,
    clearAlert: PropTypes.func
};

export default connect(
    mapStateToProps,
    { errorAlert, clearAlert }
)(Filters);
