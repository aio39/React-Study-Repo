import React, { memo, useCallback, useEffect, useRef } from 'react';
import { CLICK_CELL, SET_TURN } from './TicTackTok';

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  const onClickTd = useCallback(() => {
    // console.log('td rendered');
    // const ref = useRef([]);
    // useEffect(() => {
    //   console.log(
    //     rowIndex === ref.current[0],
    //     cellIndex === ref.current[1],
    //     dispatch === ref.current[2],
    //     cellData === ref.current[3],
    // );
    // }, [rowIndex, cellIndex, dispatch, cellData]);

    if (cellData) {
      return null;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    return null;
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
});

export default Td;
