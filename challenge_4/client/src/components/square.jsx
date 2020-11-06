import React from 'react';

var Square = (props) => (
  <td className={props.square}
    onClick={(e) => props.handleClick(props.id)}></td>
);

export default Square;