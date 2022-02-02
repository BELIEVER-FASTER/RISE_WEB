import React, { useEffect, useState } from 'react';
import { Model, modelDetails } from 'utils/modelData';
import ModelListItem from './ModelListItem';

type ModelListProps = {
  selectedCate: number;
};
export default function ModelList({ selectedCate }: ModelListProps): JSX.Element {
  const [list, setList] = useState<Model[]>([]);

  useEffect(() => {
    if (selectedCate === 0) {
      setList(modelDetails);
    } else {
      setList(modelDetails.filter(md => md.category.includes(selectedCate)));
    }
  }, [selectedCate]);
  return (
    <section className="live_b__model_list">
      {list.map(model => (
        <ModelListItem modelData={model} key={model.name} />
      ))}
    </section>
  );
}
