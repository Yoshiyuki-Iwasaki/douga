import React, { createContext, useReducer } from 'react';

const initialState = {
  popular: [],
  seleted: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { ...state, popular: action.payload.popular }
    case 'SET_SELECTED':
      return { ...state, seleted: action.payload.seleted }
    default:
      return state
  }
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
})

const StoreProvider = ({ children }) => { 
  const [globalState, setGlobalState] = useReducer(reducer, initialState)

  return (
    <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
  )
}


export default StoreProvider
