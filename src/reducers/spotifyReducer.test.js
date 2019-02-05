import { spotifyReducer } from './spotifyReducer'
import { FETCH_SPOTIFY_DATA, FETCH_SPOTIFY_DATA_ALBUMS, FETCH_SPOTIFY_DATA_TRACKS } from '../actions/types';

describe('spotifyReducer reducer', () => {

    it('should return the initial state', () => {
        expect(spotifyReducer(undefined, {})).toEqual([])
    })

    it('should handle FETCH_SPOTIFY_DATA', () => {
        expect(
            spotifyReducer([], {
                type: FETCH_SPOTIFY_DATA,
                spotifyData: { name: 'tests', id: 15615 }
            })
        ).toEqual({ name: 'tests', id: 15615 })
    })

    it('should handle FETCH_SPOTIFY_DATA_ALBUMS', () => {
        expect(
            spotifyReducer([], {
                type: FETCH_SPOTIFY_DATA_ALBUMS,
                spotifyAlbumsArtists: { name: 'tests', id: 15615 }
            })
        ).toEqual({ name: 'tests', id: 15615 })
    })

    it('should handle FETCH_SPOTIFY_DATA_TRACKS', () => {
        expect(
            spotifyReducer([], {
                type: FETCH_SPOTIFY_DATA_TRACKS,
                spotifyAlbumTracks: { name: 'tests', id: 15615 }
            })
        ).toEqual({ name: 'tests', id: 15615 })
    })

})