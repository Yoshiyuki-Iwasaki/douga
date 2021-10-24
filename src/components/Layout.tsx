import Header from './Header';
import styled from "styled-components";

const Layout = ({children}:any) => {
  return (
    <Body>
      <Header />
      <Main>{children}</Main>
    </Body>
  );
}

export default Layout;

const Body = styled.div``;
const Main = styled.div``;