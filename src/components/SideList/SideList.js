import React, { useEffect, useContext } from 'react';
import { Store } from '../../store/index';
import { fetchRelatedData } from '../../apis/index';
import Style from '../SideList/SideList.module.scss';

const SideList = () => {
const { globalState, setGlobalState } = useContext(Store);
const setRelatedVideo = async (id) => {
await fetchRelatedData(id).then((res)=>{
  setGlobalState({ type: 'SET_RELATED', payload: { related: res.data.items } })
})
}
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