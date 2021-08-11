import React from 'react';
import { moreModelList } from 'utils/modelsData';
import ModelListItem from './ModelListItem';
import { LiveBContainer } from './styles';

export default function LiveB(): JSX.Element {
  return (
    <LiveBContainer>
      <section className="live_b__banner">
        <h3>
          브랜드 컨셉과 <br /> 어울리는 쇼호스트 매칭
        </h3>
        <p>
          쇼호스트, 인플루언서, 유튜버, 아나운서, 미스코리아 등 <br /> 100여 명의 전문가로
          구성된 블랙핑크 라이브 팀
        </p>
      </section>
      <section className="live_b__model_list">
        {moreModelList.map(model => (
          <ModelListItem modelData={model} key={model.id} />
        ))}
      </section>
      <section className="more__info">
        <h3>+49</h3>
      </section>
    </LiveBContainer>
  );
}
