import { createAction, ActionType, createReducer } from 'typesafe-actions';

// 액션 타입을 선언합니다
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// 액션 생성함수를 선언합니다
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

// 모든 액션 객체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;

// 액션 객체 타입 준비
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type CounterState = {
  count: number;
};

// 초기상태를 선언합니다.
const initialState: CounterState = {
  count: 0,
};

// 리듀서를 작성합니다.
// createReducer 는 리듀서를 쉽게 만들 수 있게 해주는 함수입니다.
// Generics로 리듀서에서 관리할 상태, 그리고 리듀서에서 처리 할 모든 액션 객체들의 타입을 넣어야합니다
const counterReducer = createReducer<CounterState, CounterAction>(
  initialState,
  {
    [INCREASE]: (state) => ({ count: state.count + 1 }), // 액션을 참조 할 필요 없으면 파라미터로 state 만 받아와도 됩니다
    [DECREASE]: (state) => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }), // 액션의 타입을 유추 할 수 있습니다.
  }
);

export default counterReducer;
