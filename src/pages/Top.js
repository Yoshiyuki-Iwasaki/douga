import React, { useEffect, useContext } from 'react';
import Layout from '../components/Layout/Layout.js';
import { fetchPopularDate } from '../apis/index';
import { Store } from '../store/index';

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
      top page
    </Layout>
  )
}

export default Top;