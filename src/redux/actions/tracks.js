import axios from 'axios';

export const fetchTracks = () => (dispatch) => {
  axios
    .get(
      'http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=00d0382fa2e761fd66140773435e0f3b&format=json&limit=30',
    )
    .then(({ data }) => dispatch(setTracks(data.tracks.track)));
};

export const fetchSearchTrack = (name) => (dispatch) => {
  axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=00d0382fa2e761fd66140773435e0f3b&format=json`,
    )
    .then(({ data }) => dispatch(setSearchTrack(data.results.trackmatches.track)));
};

export const setTracks = (items) => ({
  type: 'SET_TRACKS',
  payload: items,
});

export const setSearchTrack = (items) => ({
  type: 'SET_SEARCH_TRACK',
  payload: items,
});

export const clearSerchTrack = () => ({
  type: 'CLEAR_SEARCH_TRACK',
});
