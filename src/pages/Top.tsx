import { useEffect, useContext } from 'react';
import Layout from '../components/Layout';
import { fetchPopularDate } from '../apis/index';
import { Store } from '../store/index';
import VideoGrid from '../components/video/VideoGrid';
import VideoGridItem from "../components/video/VideoGridItem";


const Top = () => {
  const { globalState, setGlobalState } = useContext<any>(Store);

  useEffect(() => {
    fetchPopularDate().then((res: any) => {
      setGlobalState({
        type: "SET_POPULAR",
        payload: { popular: res.data.items },
      });
    });
  }, [])
  return (
    <Layout>
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular:any) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.default.url}
                title={popular.snippet.title}
              />
            );
          })
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top;