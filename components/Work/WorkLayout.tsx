import BannerTitle from 'components/Common/BannerTitle';
import dynamic from 'next/dynamic';
import { LivePageContainer } from './styles';
import WorkClients from './WorkClients';
import WorkRank from './WorkRank';

const WorkProcess = dynamic(import('./WorkProcess'), { ssr: false });

export default function WorkLayout(): JSX.Element {
  return (
    <LivePageContainer>
      <BannerTitle
        page="work"
        title1="Rise"
        title2="Work"
        desc="라이즈와 함께하는 브랜드를 위해/우리가 할 수 있는 일을/고민하고 연구합니다. "
      />
      <WorkRank />
      <WorkClients />
      <WorkProcess />
    </LivePageContainer>
  );
}
