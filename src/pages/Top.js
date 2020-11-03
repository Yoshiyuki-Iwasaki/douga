import React, { useEffect, useContext } from 'react';
import Layout from '../components/Layout/Layout.js';
import { fetchPopularDate } from '../apis/index';
import { Store } from '../store/index';
import VideoGrid from '../components/VideoGrid/VideoGrid.js';
import VideoGridItem from '../components/VideoGridItem/VideoGridItem.js';


const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularDate().then((res) => {
      console.log('data', res);
      setGlobalState({type: 'SET_POPULAR', payload: { popular: res.data.items }})
    })
  }, [])
  return (
    <Layout>
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular) => { 
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.standard.url}
                title={popular.snippet.title}
              />
            )
          })
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top;