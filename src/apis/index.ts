import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;

const youtube = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const params = {
  part: 'snippet',
  maxResults: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
}

export const fetchPopularDate = async () => {
  return await youtube.get('./videos', {
    params: {
      ...params,
      chart: 'mostPopular'
    }
  })
}

export const fetchSelectedData = async (id:number) => {
  return await youtube.get('videos', {
    params: {
      ...params,
      id
    }
  })
}

export const fetchRelatedData = async (id:number) => {
  return await youtube.get('/search', {
    params: {
      ...params,
      relatedToVideoId: id
    }
  })
}