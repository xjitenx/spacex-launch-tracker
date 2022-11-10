import React from 'react';
import { Launches } from '../Types/Lunches';

type GridProps = {
  launches: Launches;
};

const Grid: React.FC<GridProps> = ({ launches }) => {
  window.console.log('launches', launches);
  return <div>Grid</div>;
};

export default Grid;
