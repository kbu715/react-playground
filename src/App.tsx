import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import { theme } from './styles';
import TodoTemplate from './components/Todo/TodoTemplate';
import TodoInsert from './components/Todo/TodoInsert';
import TodoList from './components/Todo/TodoList';
import { useCallback, useRef, useState } from 'react';

export const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초부터 공부',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고유값으로 사용될 id
  // ref 사용하여 변수 담기

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text: string) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos([todo, ...todos]);
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </ThemeProvider>
  );
};
