import React from 'react';
import { Button } from '../Button';

const Home: React.FC = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈, 제일 먼저 보여지는 페이지</p>
      <Button variant="outlined" to="/news/">
        뉴스페이지로 이동
      </Button>
      <Button size={40} variant="primary" to="/colors">
        컬러페이지로 이동
      </Button>
    </div>
  );
};

export default Home;
