import { StyledList } from './styles';
import TodoListItem from './TodoListItem';

export type Todo = { id: number; text: string; checked: boolean };

interface TodoListProps {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  return (
    <StyledList className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </StyledList>
  );
};

export default TodoList;
