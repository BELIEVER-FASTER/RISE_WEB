import React, { useState } from 'react';
import { categoryData } from 'utils/modelData';
import { CateFilterBtn, FilterContainer, ModalCateItemBox } from './styles';
import { BiCheck } from 'react-icons/bi';

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
    <ModalCateItemBox onClick={onClick} selected={selected}>
      <div className="checkbox">{selected && <BiCheck />}</div>
      <span>{ct.name}</span>
    </ModalCateItemBox>
  );
};
type CateListProps = {
  selectedCate: number;
  setSelectedCate: React.Dispatch<React.SetStateAction<number>>;
};
export default function CategoryFilterAside({
  selectedCate,
  setSelectedCate,
}: CateListProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const onToggleOpen = () => setOpen(prev => !prev);
  const onClickCate = (id: number) => {
    setSelectedCate(id);
    setOpen(false);
  };
  return (
    <>
      <FilterContainer open={open}>
        <CateItem
          onClickCate={onClickCate}
          selected={selectedCate === 0}
          ct={{ id: 0, name: '전체 카테고리' }}
        />
        {categoryData.map(ct => (
          <CateItem
            onClickCate={onClickCate}
            selected={selectedCate === ct.id}
            ct={ct}
            key={ct.id}
          />
        ))}
      </FilterContainer>
      <CateFilterBtn onClick={onToggleOpen} open={open}>
        {open ? '필터창 닫기' : '카테고리 필터'}
      </CateFilterBtn>
    </>
  );
}
