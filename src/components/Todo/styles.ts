import { List } from 'react-virtualized';
import styled from 'styled-components';

export const StyledTemplate = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  .app-title {
    background: #22b8cf;
    color: #fff;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    background: #fff;
  }
`;

export const StyledInsert = styled.form`
  display: flex;
  background: #495057;

  input {
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;

    &::placeholder {
      color: #dee2e6;
    }
    flex-grow: 1;
  }

  button {
    background: #868e96;
    color: #fff;
    padding: 0 1rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 100ms background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`;

export const StyledList = styled(List)`
  min-height: 320px;
  max-height: 520px;
  overflow-y: auto;
`;

export const StyledItem = styled.div`
  // element 사이에 border
  & + & {
    border-top: 1px solid #dee2e6;
  }

  &:nth-child(even) {
    background: #f8f9fa;
  }

  .TodoListItem {
    padding: 1rem;
    display: flex;
    align-items: center;

    .checkbox {
      cursor: pointer;
      flex-grow: 1;
      display: flex;
      align-items: center;

      svg {
        // 아이콘
        font-size: 1.5rem;
      }

      .text {
        margin-left: 0.5rem;
      }

      &.checked {
        svg {
          color: #22b8cf;
        }
        .text {
          color: #adb5bd;
          text-decoration: line-through;
        }
      }
    }

    .remove {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      color: #ff6b6b;
      cursor: pointer;
      &:hover {
        color: #ff8787;
      }
    }
  }
`;
