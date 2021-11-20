import React from 'react';
import qs from 'qs'; // query 문자열을 객체로 변환할 때 쓰는 라이브러리
import { useLocation } from 'react-router';

const About: React.FC = () => {
  const location = useLocation();
  // console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 '?' 생략
  });
  const showDetail = query.detail === 'true'; // 쿼리 문자열을 객체로 파싱하는 과정에서 결과값은 언제나 문자열이라는 점
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 실험해보는 프로젝트</p>
      {showDetail && <p>detail : true</p>}
    </div>
  );
};

export default About;
