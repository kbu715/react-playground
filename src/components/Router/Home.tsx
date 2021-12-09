import React from 'react';
import { Button } from '../Button';
import { Column, Container, Row } from '../Grid';

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
      <Container>
        <Row>
          <Column sm={1}>
            <div style={{ border: '1px solid blue', height: '100px' }}>Column</div>
          </Column>
          <Column sm={1}>
            <div style={{ border: '1px solid blue', height: '100px' }}>Column</div>
          </Column>
          <Column sm={1}>
            <div style={{ border: '1px solid blue', height: '100px' }}>Column</div>
          </Column>
          <Column sm={1}>
            <div style={{ border: '1px solid blue', height: '100px' }}>Column</div>
          </Column>
          <Column sm={1}>
            <div style={{ border: '1px solid blue', height: '100px' }}>Column</div>
          </Column>
          <Column sm={1}>
            <div style={{ border: '1px solid blue', height: '100px' }}>Column</div>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
