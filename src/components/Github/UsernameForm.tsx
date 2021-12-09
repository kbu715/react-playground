import React, { FormEvent, useState, ChangeEvent } from 'react';
import { StyledForm } from './styles';

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

const GithubUsernameForm = ({ onSubmitUsername }: GithubUsernameFormProps) => {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <StyledForm className="GithubUsernameForm" onSubmit={onSubmit}>
      <input onChange={onChange} value={input} placeholder="Github 계정명을 입력하세요." />
      <button type="submit">조회</button>
    </StyledForm>
  );
};

export default GithubUsernameForm;
