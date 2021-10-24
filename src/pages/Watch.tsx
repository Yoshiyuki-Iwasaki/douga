import React from 'react';
import Layout from '../components/Layout';
import SideList from '../components/SideList';
import VideoDetail from '../components/video/VideoDetail';

const Watch = () => {
  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  )
}

export default Watch;