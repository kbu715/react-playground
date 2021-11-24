import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { StyledInsert } from './styles';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

const TodoInsert: React.FC<TodoInsertProps> = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
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
