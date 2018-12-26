import axios from 'axios';
import api_key from './config';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + api_key
  }
});
