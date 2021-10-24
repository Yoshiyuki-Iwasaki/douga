import axios from 'axios';

const KEY = "AIzaSyDj8WzgdHgLEslbzI6xbZmsVQkSv1UCDhU";

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

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