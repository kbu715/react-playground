import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { StyledItem } from './styles';
import { Todo } from './TodoList';
import cn from 'classnames';

interface TodoListItemProps {
  todo: Todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onRemove,
  onToggle,
}) => {
  const { id, text, checked } = todo;

  return (
    <StyledItem className="TodoListItem">
      <button
        type="button"
        className={cn('checkbox', { checked })}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </button>
      <button type="button" className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </button>
    </StyledItem>
  );
};
export default TodoListItem;
