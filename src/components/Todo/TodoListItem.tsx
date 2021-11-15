import React from 'react';
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
  style?: React.CSSProperties;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onRemove,
  onToggle,
  style,
}) => {
  const { id, text, checked } = todo;

  return (
    <StyledItem className="TodoListItem-virtualized" style={style}>
      <li className="TodoListItem">
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
      </li>
    </StyledItem>
  );
};

// React.memo 두번째 인수 - props 동등 비교 커스터마이징
const todoPropsAreEqual = (
  prevProps: TodoListItemProps,
  nextProps: TodoListItemProps
) => prevProps.todo === nextProps.todo;

export default React.memo(TodoListItem, todoPropsAreEqual);
