import React from 'react';
import Layout from '../components/Layout/Layout.js';
import SideList from '../components/SideList/SideList.js';
import VideoDetail from '../components/VideoDetail/VideoDetail.js';

const Watch = () => {
  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  )
}

export default Watch;