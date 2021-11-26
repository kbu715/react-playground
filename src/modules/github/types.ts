import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { GithubProfile } from '../../lib/api/github';
import { AsyncState } from '../../lib/reducerUtils';

export type GithubAction = ActionType<typeof actions>;

// export type GithubState = {
//   userProfile: {
//     loading: boolean;
//     error: Error | null;
//     data: GithubProfile | null;
//   };
// };

export type GithubState = {
  userProfile: AsyncState<GithubProfile, Error>;
};

/*
AsyncState 를 사용해서 매번 loading, data, error 의 타입을 
직접 입력해줄 필요 없이 한줄로 깔끔하게 작성 할 수 있게 됐습니다.
*/
