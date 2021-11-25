import { ActionType, createAction, createReducer } from 'typesafe-actions';

const TEST_ACTION = 'auth/TEST_ACTION';

export const testAction = createAction(TEST_ACTION)();

const actions = { testAction };

type TestAction = ActionType<typeof actions>;

type TestState = Record<string, never>; // meaning "empty object"

const initialState = {};

const authReducer = createReducer<TestState, TestAction>(initialState, {
  [TEST_ACTION]: (state) => state,
});

export default authReducer;
