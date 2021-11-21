import React, { useContext } from 'react';
import ColorContext from '../../contexts/color';
import { StyledBox, StyledSubBox } from './styles';

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  console.log(state);

  return (
    <React.Fragment>
      <StyledBox backgroundColor={state.color} />
      <StyledSubBox backgroundColor={state.subColor} />
    </React.Fragment>
  );
};

export default ColorBox;
