import React from 'react';
import { ColorProvider } from '../../contexts/color';
import ColorBox from './ColorBox';
import SelectColors from './SelectColors';

const Color = () => {
  return (
    <ColorProvider>
      <React.Fragment>
        <SelectColors />
        <ColorBox />
      </React.Fragment>
    </ColorProvider>
  );
};

export default Color;
