import React, { useReducer, createContext } from 'react';
import Table from './Table';

const TableContext = createContext();

const initialState = {
  tableData: [],
  timer: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <From />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </>
  );
};

export default MineSearch;
