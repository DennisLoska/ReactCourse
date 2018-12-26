import axios from 'axios';
import Config from './config';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + new Config().getAccess()
  }
});
