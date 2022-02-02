import React from 'react';
import { categoryData } from 'utils/modelData';
import { CategoryItem, CategoryListBox } from './styles';

type CateItemProps = {
  ct: {
    id: number;
    name: string;
  };
  selected: boolean;
  onClickCate: (id: number) => void;
};
const CateItem = ({ ct, onClickCate, selected }: CateItemProps) => {
  const onClick = () => onClickCate(ct.id);
  return (
    <CategoryItem onClick={onClick} selected={selected}>
      {ct.name}
    </CategoryItem>
  );
};
type CateListProps = {
  selectedCate: number;
  setSelectedCate: React.Dispatch<React.SetStateAction<number>>;
};
function CategoryFilter({ selectedCate, setSelectedCate }: CateListProps): JSX.Element {
  const onClickCate = (id: number) => setSelectedCate(id);
  return (
    <CategoryListBox>
      <CateItem
        onClickCate={onClickCate}
        selected={selectedCate === 0}
        ct={{ id: 0, name: 'all' }}
      />
      {categoryData.map(ct => (
        <CateItem
          onClickCate={onClickCate}
          selected={selectedCate === ct.id}
          ct={ct}
          key={ct.id}
        />
      ))}
    </CategoryListBox>
  );
}

export default CategoryFilter;
