import React from 'react';
import { colors } from '../../constants/colors';
import { ColorConsumer } from '../../contexts/color';
import { StyledColorItem, StyledColorList } from './styles';

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택해주세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <StyledColorList>
            {colors.map((color) => (
              <StyledColorItem
                key={color}
                backgroundColor={color}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}
              ></StyledColorItem>
            ))}
          </StyledColorList>
        )}
      </ColorConsumer>
    </div>
  );
};

export default SelectColors;
