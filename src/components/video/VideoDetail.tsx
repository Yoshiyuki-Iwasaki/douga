import React, { useEffect,useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSelectedData } from '../../apis/index';
import { Store } from '../../store/index';
import VideoPlay from './VideoPlay';
import Linkfy from 'react-linkify';

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext<any>(Store);
  const location = useLocation()
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id:any = searchParams.get("v");
    // console.log('id', id);
    await fetchSelectedData(id).then((res: any) => {
      // console.log('res', res);
      const item = res.data.items.shift();
      setGlobalState({ type: "SET_SELECTED", payload: { selected: item } });
    });
  }

  useEffect(() => {
    setSelectedVideo();
  }, [])
  return globalState.selected ? (
    <div>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkfy>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkfy>
    </div>
  ) : (<span>データはありません。</span>)
}

export default VideoDetail;