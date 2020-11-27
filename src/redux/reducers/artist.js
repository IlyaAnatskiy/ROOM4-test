const initialState = {
  currentArtist: {},
};

export const artist = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ARTIST':
      return {
        ...state,
        currentArtist: action.payload,
      };
    default:
      return state;
  }
};
