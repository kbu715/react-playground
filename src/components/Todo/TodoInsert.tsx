import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { StyledInsert } from './styles';

interface TodoInsertProps {
  onInsert: (text: string) => void;
}

const TodoInsert: React.FC<TodoInsertProps> = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <StyledInsert className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </StyledInsert>
  );
};

export default TodoInsert;
