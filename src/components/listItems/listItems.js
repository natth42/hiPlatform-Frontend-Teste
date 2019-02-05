import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatTime } from '../../utils/formatTime';
import Favorite from '../favorite/favorite';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class ListItems extends React.Component {
    constructor(props) {
        super(props);
        this.goToListDetails = this.goToListDetails.bind(this);
        this.verifyFavorites = this.verifyFavorites.bind(this);
    }

    goToListDetails(id) {
        this.props.history.push(`/lista/detalhes/${this.props.typeFilter}/${id}`);
    }

    verifyFavorites(items) {
        let searchItem = JSON.parse(localStorage.getItem(this.props.nameFilter));
        if (!searchItem) {
            return items;
        }
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            element.favorite = searchItem.includes(element.id);
        }
        return items;
    }

    render() {
        const { typeFilter, spotifyData, nameFilter } = this.props;
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
                                    <Favorite item={item} nameFilter={nameFilter} />
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
                                    <Favorite item={item} nameFilter={nameFilter} />
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
                                    <Favorite item={item} nameFilter={nameFilter} />
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
        spotifyData: state.spotifyReducer
    };
};

ListItems.propTypes = {
    typeFilter: PropTypes.string,
    nameFilter: PropTypes.string,
    spotifyData: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

export default withRouter(connect(
    mapStateToProps,
    null
)(ListItems));