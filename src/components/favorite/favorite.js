import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { setFavoriteItem, setUnfavoriteItem } from '../../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';

class Favorite extends React.Component {
    constructor(props){
        super(props);
        this.setFavorite = this.setFavorite.bind(this);
        this.setUnfavorite = this.setUnfavorite.bind(this);
    }

    setFavorite(item){
        item.favorite = true;
        this.forceUpdate();
        this.props.setFavoriteItem(this.props.nameFilter, item);
    }

    setUnfavorite(item){
        item.favorite = false;
        this.forceUpdate();
        this.props.setUnfavoriteItem(this.props.nameFilter, item);
    }

    render() {
        const { item } = this.props;
        return (
        <Fragment>
         {
            item.favorite ?
            <FontAwesomeIcon icon={starSolid} color="yellow" onClick={() => this.setUnfavorite(item)}/>
            :
            <FontAwesomeIcon icon={starRegular} onClick={() => this.setFavorite(item)} />
         }
        </Fragment>
    );
}
}

const mapStateToProps = state => {
    return {
        setFavoriteItem,
        setUnfavoriteItem
    };
};

Favorite.propTypes = {
    setFavoriteItem: PropTypes.func,
    setUnfavoriteItem: PropTypes.func,
    item: PropTypes.object,
    nameFilter: PropTypes.string
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFavoriteItem: (search, item) => dispatch(setFavoriteItem(search, item)),
        setUnfavoriteItem: (search, item) => dispatch(setUnfavoriteItem(search, item))
    };
  };

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorite));