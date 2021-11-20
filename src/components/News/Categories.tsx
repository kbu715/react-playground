import React from 'react';
import { CategoriesBlock, Category } from './styles';
import categories from './categories.json';

const Categories: React.FC = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          to={c.name === 'all' ? '/news/' : `/news/${c.name}`}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
