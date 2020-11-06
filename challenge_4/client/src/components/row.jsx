import React from 'react';
import Square from './square.jsx';

var Row = (props) => (
  <tr id={props.id}>
    {props.row.map((square, i) =>
      <Square square={square} key={i} id={i} handleClick={props.handleClick} />
    )}
  </tr>
);

export default Row;