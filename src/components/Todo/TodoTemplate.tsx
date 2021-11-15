import { ReactNode } from 'react';
import { StyledTemplate } from './styles';

interface TodoTemplateProps {
  children: ReactNode;
}

const TodoTemplate: React.FC<TodoTemplateProps> = ({ children }) => {
  return (
    <StyledTemplate className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </StyledTemplate>
  );
};

export default TodoTemplate;
