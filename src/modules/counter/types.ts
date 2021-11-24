import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CounterAction = ActionType<typeof actions>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
export type CounterState = {
  count: number;
};
