import React, { useContext } from 'react';
import { TableContext } from './MineSearch';
import Td from './Td';

const Tr = ({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  console.log(rowIndex);

  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((td, i) => <Td key={i} rowIndex={rowIndex} cellIndex={i} />)}
    </tr>
  );
};

export default Tr;
