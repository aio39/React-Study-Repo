import React, { useState, useReducer, useCallback, useEffect } from 'react';
import Table from './table';

const initialState = {
  winner: '',
  turn: 'A',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const SET_TURN = 'SET_TURN';
export const RESET_GAME = 'RESET_GAME';

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
    case SET_TURN: {
      return {
        ...state,
        turn: state.turn === 'A' ? 'B' : 'A',
      };
    }
    case RESET_GAME: {
      return {
        winner: '',
        turn: 'A',
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        recentCell: [-1, -1],
      };
    }
    default:
      return state;
  }
};

const TickTakTok = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;
  //   const [winner, setWinner] = useStateState('');
  //   const [turn, setTurn] = useState('0');
  //   const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], , ['', '', '']]);

  useEffect(() => {
    const [row, cell] = recentCell;
    if (row < 0) {
      return;
    }

    let win = false;
    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
      win = true;
    }
    if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
      win = true;
    }
    if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
      win = true;
    }
    if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
      win = true;
    }
    if (win) {
      dispatch({ type: RESET_GAME });
      dispatch({ type: SET_WINNER, winner: turn });
      console.log('게임끝');
    } else {
      let all = true;
      tableData.forEach(r => {
        r.forEach(c => {
          if (!c) all = false;
        });
        if (all) {
        } else {
          dispatch({ type: SET_TURN });
        }
      });
    }
  }, [recentCell]);

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
