import React, { createContext, ReactNode, useState, Dispatch } from 'react';

type ColorProviderProps = {
  children: ReactNode;
};

type State = {
  state: {
    color: string | undefined;
    subColor: string | undefined;
  };
  actions: {
    setColor: Dispatch<React.SetStateAction<string | undefined>>;
    setSubColor: Dispatch<React.SetStateAction<string | undefined>>;
  };
};

const ColorContext = createContext<State>({
  state: { color: 'black', subColor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({ children }: ColorProviderProps) => {
  const [color, setColor] = useState<string | undefined>('black');
  const [subColor, setSubColor] = useState<string | undefined>('red');

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer

const { Consumer: ColorConsumer } = ColorContext; // destructuring

// ColorProvider와 ColorConsumer 내보내기

export { ColorProvider, ColorConsumer };

export default ColorContext;
