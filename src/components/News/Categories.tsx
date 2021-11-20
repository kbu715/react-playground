import React from 'react';
import { CategoriesBlock, Category } from './styles';
import categories from './categories.json';

interface CategoriesProps {
  onSelect: (category: string) => void;
  category: string;
}

const Categories: React.FC<CategoriesProps> = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          isActive={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
