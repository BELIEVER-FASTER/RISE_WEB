import AboutSection1 from './AboutSection1';
import AboutSection2 from './AboutSection2';
import AboutSection3 from './AboutSection3';
import AboutSection4 from './AboutSection4';
import AboutSection5 from './AboutSection5';
import AboutSection6 from './AboutSection6';
import { AboutLayoutCT } from './styles';

export default function AboutLayout(): JSX.Element {
  return (
    <AboutLayoutCT>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
    </AboutLayoutCT>
  );
}
