import React, { useCallback } from 'react';
import { TodosState } from '../../modules/todos';
import { StyledList } from './styles';
import TodoListItem from './TodoListItem';

type TodoListProps = {
  todos: TodosState;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle]
  );

  return (
    <StyledList
      className="TodoList"
      width={512}
      height={520}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
    // <StyledList className="TodoList">
    //   {todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       key={todo.id}
    //       onRemove={onRemove}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </StyledList>
  );
};

export default React.memo(TodoList);
