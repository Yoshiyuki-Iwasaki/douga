import { useEffect, useState, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Store } from '../store/index';
import styled from 'styled-components';

const Header = () => {
  const [term, setTerm] = useState('');
  const history = useHistory();
  const { globalState, setGlobalState } = useContext<any>(Store);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setGlobalState({ type: "SET_TERM", payload: { term } });
    history.push(`./search?query=${term}`);
  };
  useEffect(() => {
    setTerm(globalState.term);
  })
  return (
    <HeaderLayout>
      <Inner>
        <Title>
          <Link to="/">
            <Logo>
            Iwasakiii
            </Logo>
          </Link>
        </Title>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="検索"
            onChange={e => setTerm(e.target.value)}
            value={term}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </Inner>
    </HeaderLayout>
  );
}

export default Header;


const HeaderLayout = styled.header`
  margin: 0 auto;
  width: 100%;
  background: rgba(243, 244, 246, 0.8);
`;
const Title = styled.div``;
const Logo = styled.a`
  transition: opacity 0.6s;
  cursor: pointer;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.025em;

  &:hover {
    opacity: 0.6;
  }
`;
const Inner = styled.div`
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
`;