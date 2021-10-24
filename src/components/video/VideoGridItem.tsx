import { Link } from 'react-router-dom';
import styled from "styled-components";

const VideoGridItem = ({id, src, title}:any) => {
  return (
    <Block>
      <Link to={{ pathname: "watch", search: `?v=${id}` }}>
        <img src={src} alt={title} />
        <span>{title}</span>
      </Link>
    </Block>
  );
}

export default VideoGridItem;

const Block = styled.div`
  padding: 20px;
  width: 33.3%;
`;