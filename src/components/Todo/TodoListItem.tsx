import React, { CSSProperties, useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { StyledItem } from './styles';
import cn from 'classnames';
import { Todo } from '../../modules/todos';

type TodoListItemProps = {
  todo: Todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  style?: CSSProperties;
};

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onRemove,
  onToggle,
  style,
}) => {
  const { text, done } = todo;

  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [todo, onToggle]);

  const handleRemove = useCallback(() => {
    onRemove(todo.id);
  }, [todo, onRemove]);

  return (
    <StyledItem className="TodoListItem-virtualized" style={style}>
      <li className="TodoListItem">
        <button
          type="button"
          className={cn('checkbox', { done })}
          onClick={handleToggle}
        >
          {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </button>
        <button type="button" className="remove" onClick={handleRemove}>
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
