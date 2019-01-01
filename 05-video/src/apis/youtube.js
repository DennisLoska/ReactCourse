import axios from 'axios';

const KEY = 'AIzaSyDVhupFCJKEgeO8iDwEzlu8gJbbYs6fq-0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: '5',
    part: 'snippet',
    key: KEY
  }
});
