import React, { useState, useReducer, useCallback } from 'react';
import Table from './table';

const initialState = {
  winner: '',
  turn: 'A',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, 1],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const SET_TURN = 'SET_TURN';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case SET_TURN:
      return {
        ...state,
        turn: state.turn === 'A' ? 'B' : 'A',
      };
    default:
      return {};
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
      <Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch} />
      {state.winner && <div>{state.winner}님의 승리 </div>}
    </>
  );
};

export default TickTakTok;
