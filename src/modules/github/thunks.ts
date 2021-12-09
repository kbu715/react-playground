// import { ThunkAction } from 'redux-thunk';
// import { RootState } from '..';
// import { GithubAction } from './types';
import { getUserProfile } from '../../lib/api/github';
import { getUserProfileAsync } from './actions';
// import axios, { AxiosError } from 'axios';
import createAsyncThunk from '../../lib/createAsyncThunk';

// export function getUserProfileThunk(
//   username: string
// ): ThunkAction<Promise<void>, RootState, null, GithubAction> {
//   return async (dispatch) => {
//     const { request, success, failure } = getUserProfileAsync;
//     dispatch(request());
//     try {
//       const userProfile = await getUserProfile(username);
//       dispatch(success(userProfile));
//     } catch (e: AxiosError | Error | unknown) {
//       if (axios.isAxiosError(e)) {
//         // Access to config, request, and response
//         dispatch(failure(e as AxiosError));
//       } else {
//         // Just a stock error
//         console.log(e);
//       }
//     }
//   };
// }

// ThunkAction 의 Generics 로는 다음 값들을 순서대로 넣어주어야 합니다.

// <TReturnType, TState, TExtraThunkArg, TBasicAction>

// TReturnType 의 경우 아무것도 반환하지 않는다면 void 라고 넣으시면 됩니다.
// 현재 상황에서는 thunk 함수에서 async 를 사용하고 있으니 Promise<void>가 더 정확합니다.
// 하지만 그냥 void 라고 입력해도 문제가 되지는 않습니다.

/* 
물론 모든 API 연동 작업에 대하여 이 유틸 함수를 사용 할 수는 없을 것입니다. 
가끔씩은 까다로운 로직을 가지고 있는 thunk 함수의 경우엔 당연히 직접 작성해야 될 수도 있습니다. 
하지만 이렇게 단순히 데이터만 바로 조회하는 형태의 코드(GET)라면 createAsyncThunk 함수를 사용하여 구현하면 편할 것 입니다.
*/
export const getUserProfileThunk = createAsyncThunk(getUserProfileAsync, getUserProfile);
