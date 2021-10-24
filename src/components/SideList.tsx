import React, { useEffect, useContext } from 'react';
import { Store } from '../store/index';
import { fetchRelatedData } from '../apis/index';

const SideList = () => {
const { globalState, setGlobalState } = useContext<any>(Store);
const setRelatedVideo = async (id: any) => {
  await fetchRelatedData(id).then((res: any) => {
    setGlobalState({
      type: "SET_RELATED",
      payload: { related: res.data.items },
    });
  });
};
useEffect(() => {
  setRelatedVideo(globalState.selected.id);
  // console.log('globalState.related' + globalState.related);
  // console.log('globalState.selected.id' + globalState.selected.id);
},[globalState.selected])
return (
<div>
</div>
)
}

export default SideList;