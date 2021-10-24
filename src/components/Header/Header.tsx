import React, { useEffect, useState, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Store } from '../../store/index';

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
    <div>
      <div>
        <Link to="/">Iwasakiii</Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="検索"
            onChange={e => setTerm(e.target.value)}
            value={term}
          />
          <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  )
}

export default Header;