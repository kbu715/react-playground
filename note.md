## 타입스크립트에서 리덕스 프로처럼 사용하기

### typesafe-actions로 리팩토링

액션 생성 함수를 매번 직접 만들 필요 없이 `createAction` 을 사용해서 한 줄로 쉽게 작성 할 수 있게 되었습니다.

`createReducer` 는 리듀서를 `switch` 문이 아닌 객체 형태로 작성 할 수 있게 해줍니다. 취향에 따라 다르긴 하겠지만 `switch` 문을 사용하는 것 보다 코드가 훨씬 간결해졌습니다.

### snippets

1. [snippets generator](https://snippet-generator.app/) 접속

2. 템플릿 작성

```
import React from 'react';
import styled from 'styled-components';

const Styled${TM_FILENAME_BASE} = styled.div``;

const ${TM_FILENAME_BASE}: React.FC = () => {
  return <Styled${TM_FILENAME_BASE}>Template</Styled${TM_FILENAME_BASE}>;
};

export default ${TM_FILENAME_BASE};
```

3. Description, Tab trigger 작성

예시)

- Description: 'Styled React Functional Component`
- Tab trigger: 'srfc'

4. 우측하단 copy snippet

5. vscode에서 `Preference` -> `User snippets` -> `javascriptreact.json` or `typescriptreact.json`에 복사 붙여넣기

`More Info`: [https://code.visualstudio.com/docs/editor/userdefinedsnippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

## 크롬 자동완성 끄기 (보안문제 해결법)

항상 새로운 비밀번호를 입력받는다는 꼼수를 이용

```html
<input type="password" name="password" autocomplete="new-password" />
```

## Quicktype

JSON 을 바로 타입스크립트 인터페이스로 변환 할 수 있습니다.

[https://app.quicktype.io/?l=ts](https://app.quicktype.io/?l=ts)

## `ThunkAction`

`ThunkAction` 의 Generics 로는 다음 값들을 순서대로 넣어주어야 합니다.

`<TReturnType, TState, TExtraThunkArg, TBasicAction>`

1. **TReturnType**: thunk 함수에서 반환하는 값의 타입을 설정합니다.
2. **TState**: 스토어의 상태에 대한 타입을 설정합니다. (RootState)
3. **TExtraThunkArg**: redux-thunk 미들웨어의 Extra Argument의 타입을 설정합니다.
4. **TBasicAction**: dispatch 할 수 있는 액션들의 타입을 설정합니다.

## Parameters Test

```typescript
// Parameters test

function sum(a: number, b: number) {
  return a + b;
}
type P = Parameters<typeof sum>; // type P = [a: number, b: number]
```
