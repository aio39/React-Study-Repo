import React, { useState, useReducer, useCallback } from 'react';
import Table from './table';

const initialState = {
  winner: '',
  turn: '0',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};

const SET_WINNER = 'SET_WINNER';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
  }
};

const TickTakTok = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const [winner, setWinner] = useStateState('');
  //   const [turn, setTurn] = useState('0');
  //   const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], , ['', '', '']]);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: 'o' });
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} />
      {state.winner && <div>{state.winner}님의 승리 </div>}
    </>
  );
};

export default TickTakTok;
