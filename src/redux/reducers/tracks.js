const initialState = {
  tracks: [],
  searchTrack: [],
};

export const tracks = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRACKS':
      return {
        ...state,
        tracks: action.payload,
      };
    case 'SET_SEARCH_TRACK':
      return {
        ...state,
        searchTrack: action.payload,
      };
    case 'CLEAR_SEARCH_TRACK':
      return {
        ...state,
        searchTrack: [],
      };
    default:
      return state;
  }
};
