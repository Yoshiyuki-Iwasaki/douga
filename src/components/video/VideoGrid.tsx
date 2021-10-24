import styled from "styled-components";

const VideoGrid = ({ children }: any) => {
  return <Flex>{children}</Flex>;
};

export default VideoGrid;

const Flex = styled.div`
margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
`;
