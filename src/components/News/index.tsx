import React, { useState, useCallback } from 'react';
import Categories from './Categories';
import NewsList from './NewsList';

const News: React.FC = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback<(category: string) => void>(
    (category) => setCategory(category),
    []
  );
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default News;
