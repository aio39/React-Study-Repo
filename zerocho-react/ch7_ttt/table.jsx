import React from 'react';
import Tr from './tr';

const Table = ({ tableData, dispatch }) => {
  return (
    <table>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowIndex={i} dispatch={dispatch} rowData={tableData[i]} />
        ))}
    </table>
  );
};

export default Table;
