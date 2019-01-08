import { combineReducers } from 'redux';

export const songsReducer = () => {
  return [
    {
      title: 'Psalm 51',
      length: '4:36'
    },
    {
      title: 'At the cross',
      length: '3:27'
    },
    {
      title: 'Narrow road',
      length: '2:56'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  //Keys are state objects in React
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
