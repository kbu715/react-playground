import { createReducer } from 'typesafe-actions';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';
import { TodosAction, TodosState } from './types';

// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
const todosReducer = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) => [
    {
      ...action.payload,
      done: false,
    },
    ...state,
  ],
  // 바구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있음
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, { payload: id }) => state.filter((todo) => todo.id !== id),
});

export default todosReducer;
