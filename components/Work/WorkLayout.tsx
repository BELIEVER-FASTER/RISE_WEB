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
        title2="Work"
        desc="패션 코스메틱 라이브 쇼핑 MCN 패션&코스메틱 전문 쇼핑 호스트 + 크리에이터와 함께하는 라이브 쇼핑의 A-Z"
      />
      <WorkRank />
      <WorkClients />
      <WorkProcess />
    </LivePageContainer>
  );
}
