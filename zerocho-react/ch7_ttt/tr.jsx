import React, { memo } from 'react';
import Td from './td';

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td key={i} cellData={rowData[i]} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} />
        ))}
    </tr>
  );
});

export default Tr;
