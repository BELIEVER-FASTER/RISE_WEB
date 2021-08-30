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
        title1="Rise"
        title2="Work"
        desc="매일 라이즈는 어떻게 하면/고객이 더 쉽고 매출을 늘릴수 있을까 /하는 고민으로 하루를 시작합니다."
      />
      <WorkRank />
      <WorkClients />
      <WorkProcess />
    </LivePageContainer>
  );
}
