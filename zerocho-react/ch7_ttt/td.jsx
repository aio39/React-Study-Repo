import React, { useCallback } from 'react';
import { CLICK_CELL, SET_TURN } from './TicTackTok';

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    console.log(cellData);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: SET_TURN });
  }, []);

  return <td onClick={onClickTd}>{cellData}</td>;
};

export default Td;
