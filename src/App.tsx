import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import { theme } from './styles';
// import TodoTemplate from './components/Todo/TodoTemplate';
// import TodoInsert from './components/Todo/TodoInsert';
// import TodoList from './components/Todo/TodoList';
// import { useCallback, useRef, useState } from 'react';
// import { produce } from 'immer';
import Routes from './Routes';

// const createBulkTodos = () => {
//   const array = [];
//   for (let i = 1; i <= 2500; i++) {
//     array.push({
//       id: i,
//       text: `할 일 ${i}`,
//       checked: false,
//     });
//   }
//   return array;
// };

export const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos);
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트 기초부터 공부',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일링',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false,
  //   },
  // ]);

  // 고유값으로 사용될 id
  // ref 사용하여 변수 담기

  // const nextId = useRef(4);

  // const onInsert = useCallback((text: string) => {
  //   const todo = {
  //     id: nextId.current,
  //     text,
  //     checked: false,
  //   };
  //   // (todos) => [todo, ...todos]
  //   setTodos(
  //     produce((draft) => {
  //       draft.unshift(todo);
  //     })
  //   );
  //   nextId.current += 1;
  // }, []);

  // const onRemove = useCallback((id) => {
  //   // setTodos((todos) => todos.filter((todo) => todo.id !== id));
  //   // immer 사용해보기
  //   // immer 사용했을때 가독성이 증가했는가? 글쎄...
  //   setTodos(
  //     produce((draft) => {
  //       draft.splice(
  //         draft.findIndex((todo) => todo.id === id),
  //         1
  //       );
  //     })
  //   );
  // }, []);

  // const onToggle = useCallback((id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo
  //     )
  //   );
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate> */}
      <Routes />
    </ThemeProvider>
  );
};
