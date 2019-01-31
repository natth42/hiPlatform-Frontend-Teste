import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setFilterType } from '../../actions/index';
import { Link } from '../link/link';

class TypeFilter extends React.Component {

    render() {
        const { typeFilter, setFilterType } = this.props;
        return (
            <Fragment>
                <div className="center">
                    <Link
                        active={'artist' === typeFilter}
                        onClick={() => setFilterType('artist')}
                        text={'Artista'}></Link>
                    <Link
                        active={'album' === typeFilter}
                        onClick={() => setFilterType('album')}
                        text={'Album'}></Link>
                    <Link
                        active={'track' === typeFilter}
                        onClick={() => setFilterType('track')}
                        text={'Música'}
                    ></Link>
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
        setFilterType,
        typeFilter: state.typeFilterReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterType: (filter) => dispatch(setFilterType(filter))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TypeFilter);
