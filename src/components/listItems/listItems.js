import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatTime } from '../../utils/formatTime';
import Tag from '../tag/tag';
import Favorite from '../favorite/favorite';
import { ImageNameItem } from '../imageNameItem/imageNameItem';
import { verifySpotifySavedData } from '../../actions/index';
import { loadState } from '../../utils/localStorage';
import './listItems.scss';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class ListItems extends React.Component {
    constructor(props) {
        super(props);
        this.goToListDetails = this.goToListDetails.bind(this);
        this.verifyFavorites = this.verifyFavorites.bind(this);
    }

    componentDidMount(){
        if(this.props.spotifyData !== undefined)
            this.props.verifySpotifySavedData();
    }

    goToListDetails(id) {
        this.props.history.push(`/lista/detalhes/${this.props.typeFilter}/${id}`);
    }

    verifyFavorites(items) {
        let searchItem = loadState(this.props.nameFilter);
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
                                    <Favorite item={item} />
                                </td>
                                <td onClick={() => this.goToListDetails(item.id)}>
                                    <ImageNameItem name={item.name} images={item.images} />
                                </td>
                                <td>
                                    {
                                        item.genres.join(", ")
                                    }
                                </td>
                                <td>
                                    <Tag popularity={item.popularity} />
                                </td>
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
                                    <Favorite item={item} />
                                </td>
                                <td onClick={() => this.goToListDetails(item.id)}>
                                    <ImageNameItem name={item.name} images={item.images} />
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
                                    <Favorite item={item} />
                                </td>
                                <td>
                                    <ImageNameItem name={item.name} images={item.album.images} />
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
        spotifyData: state.spotifyReducer,
        verifySpotifySavedData
    };
};

ListItems.propTypes = {
    typeFilter: PropTypes.string,
    spotifyData: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    verifySpotifySavedData: PropTypes.func
};

export default withRouter(connect(
    mapStateToProps,
    { verifySpotifySavedData }
)(ListItems));