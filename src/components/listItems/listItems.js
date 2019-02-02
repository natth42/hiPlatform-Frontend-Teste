import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatTime } from '../../utils/formatTime';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { setFavoriteItem, setUnfavoriteItem } from '../../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';

class ListItems extends React.Component {
    constructor(props){
        super(props);
        this.goToListDetails = this.goToListDetails.bind(this);
        this.setFavorite = this.setFavorite.bind(this);
        this.setUnfavorite = this.setUnfavorite.bind(this);
        this.verifyFavorites = this.verifyFavorites.bind(this);
    }
    
    goToListDetails(id){
        this.props.history.push(`/lista/detalhes/${this.props.typeFilter}/${id}`);
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

    verifyFavorites(items){
        let searchItem = JSON.parse(localStorage.getItem(this.props.nameFilter));
        if(!searchItem){
            return items;
        }
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            element.favorite = searchItem.includes(element.id);
        }
        return items;
    }

    render() {
        const { typeFilter, spotifyData } = this.props;
        return (
        <Fragment>
            {
                typeFilter === 'artist'
                &&
                spotifyData.artists
                &&
                this.verifyFavorites(spotifyData.artists.items).map((item) =>
                    (
                        <tr className="cursor" key={item.id}>
                            <td>
                                {
                                    item.favorite ?
                                    <FontAwesomeIcon icon={starSolid} color="yellow" onClick={() => this.setUnfavorite(item)} />
                                    :
                                    <FontAwesomeIcon icon={starRegular} onClick={() => this.setFavorite(item)} />
                                }
                            </td>
                            <td onClick={() => this.goToListDetails(item.id)}>
                                <Container>
                                    <Row>
                                        <Col xs="auto">
                                        {
                                            item.images[0]
                                            &&
                                            <img src={item.images[0].url} alt="" height="64" width="64" />
                                        }
                                        </Col>
                                        <Col>
                                            {item.name}
                                        </Col>
                                    </Row>
                                </Container>
                            </td>
                            <td>
                                {
                                    item.genres.join(", ")
                                }
                            </td>
                            <td>{
                                item.popularity >= 80 ? 'Hot' : item.popularity >= 60 && item.popularity <= 79 ? 'Cool' : item.popularity >= 30 && item.popularity <= 59 ? 'Regular' : 'Underground' 
                            }</td>
                        </tr>
                    )
                )
            }

            {
                typeFilter === 'album'
                &&
                spotifyData.albums
                &&
                this.verifyFavorites(spotifyData.albums.items).map((item) =>
                    (
                        <tr className="cursor" key={item.id}>
                        <td>
                        {
                            item.favorite ?
                            <FontAwesomeIcon icon={starSolid} color="yellow" onClick={() => this.setUnfavorite(item)}/>
                            :
                            <FontAwesomeIcon icon={starRegular} onClick={() => this.setFavorite(item)} />
                        }
                    </td>
                            <td onClick={() => this.goToListDetails(item.id)}>
                                <Container>
                                    <Row>
                                        <Col xs="auto">
                                        {
                                            item.images[0]
                                            &&
                                            <img src={item.images[0].url} alt="" height="64" width="64" />
                                        }
                                        </Col>
                                        <Col>
                                        {item.name}
                        </Col>
                                    </Row>
                                </Container>
                            </td>
                            <td>
                            {
                                item.artists.length > 2 ?
                                'Various artists'
                                :
                                item.artists.map((artist) => (
                                    <div key={artist.id}>{artist.name}</div>
                                ))
                            }
                            </td>
                            <td>{item.release_date}</td>
                        </tr>
                    )
                )
            }

            {
                typeFilter === 'track'
                &&
                spotifyData.tracks
                &&
                this.verifyFavorites(spotifyData.tracks.items).map((item) =>
                    (
                        <tr key={item.id}>
                        <td className="cursor">
                        {
                            item.favorite ?
                            <FontAwesomeIcon icon={starSolid} color="yellow" onClick={() => this.setUnfavorite(item)}/>
                            :
                            <FontAwesomeIcon icon={starRegular} onClick={() => this.setFavorite(item)} />
                        }
                    </td>
                            <td>
                                <Container>
                                    <Row>
                                        <Col xs="auto">
                                        {
                                            item.album.images[0]
                                            &&
                                            <img src={item.album.images[0].url} alt="" height="64" width="64" />
                                        }
                        </Col>
                                        <Col>
                                            {item.name}
                        </Col>
                                    </Row>
                                </Container>
                            </td>
                            <td>
                            {
                                Array.prototype.map.call(item.artists, artist => artist.name).join(", ")
                            }
                            </td>
                            <td>{item.album.name}</td>
                            <td>{formatTime(item.duration_ms)}</td>
                        </tr>
                    )
                )
            }
        </Fragment>
    );
}
}

const mapStateToProps = state => {
    return {
        typeFilter: state.typeFilterReducer,
        nameFilter: state.nameFilterReducer,
        spotifyData: state.spotifyReducer,
        setFavoriteItem,
        setUnfavoriteItem
    };
};

ListItems.propTypes = {
    typeFilter: PropTypes.string,
    nameFilter: PropTypes.string,
    spotifyData: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    setFavoriteItem: PropTypes.func,
    setUnfavoriteItem: PropTypes.func
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
)(ListItems));