import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollTo from 'gsap/ScrollToPlugin';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { DetailBox, DetailLayoutContainer } from './styles';
import { modelDetails } from 'utils/modelData';
import Social from 'components/Counter/Social';

function LinkIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill="#fff" />
      <g clip-path="url(#clip0)">
        <path d="M9.26141 4.32104H4.69824V4.95954H9.26141V4.32104Z" />
        <path d="M10.6797 10.304V5.62061H10.0394V10.304H10.6797Z" />
        <path d="M5.14901 10.2644L9.50586 5.91968L9.05313 5.4682L4.69628 9.81295L5.14901 10.2644Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="5.98295" height="5.98295" transform="translate(4.69629 4.32104)" />
        </clipPath>
      </defs>
    </svg>
  );
}

gsap.registerPlugin(ScrollTrigger, ScrollTo);
export default function DetailLayout(): JSX.Element {
  const router = useRouter();

  const [modelData] = useState(
    modelDetails.find(data => data.id === +(router.query.model as string))
  );
  useEffect(() => {
    const sc = document.querySelector('#scroll_container') as HTMLElement;
    const handler = () => {
      const height = (document.querySelector('.main_content') as HTMLDivElement)
        .offsetHeight;
      const aaa =
        sc.scrollTop === 0
          ? 0
          : window.innerWidth > 900
          ? (100 * (sc.scrollTop + sc.clientHeight)) / sc.scrollHeight
          : (sc.scrollTop / height) * 100 - 4;

      if (aaa > 82) {
        gsap.to('#scroll_container', { opacity: 0, duration: 0.5 });
        setTimeout(() => {
          router.push('/showhost', '/showhost', { scroll: false });
        }, 500);
      } else if (aaa > 67) {
        gsap.set('.main_content', {
          opacity: (105 - aaa) * 3.5 * 0.01,
          animation: 'none',
          duration: 0.2,
        });
      } else {
        gsap.set('.main_content', { opacity: 1 });
      }
    };
    sc.addEventListener('scroll', handler);
    return () => {
      sc.removeEventListener('scroll', handler);
    };
  }, []);

  const onClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      router.push(router.basePath, router.basePath, { scroll: false });
    }
  };
  return (
    <DetailLayoutContainer id="scroll_container">
      <section onClick={onClose}>
        <DetailBox className="main_content">
          <div className="scroll_message">Scroll To View More</div>
          <section>
            <article className="name">
              <h1>{modelData?.detail.name}</h1>
              <p>{modelData?.detail.part}</p>
            </article>
            <article className="section-1">
              <div className="img__wrapper-1">
                <img src={modelData?.imageClips[0].link} alt="main_image" />
              </div>
              <p>{modelData?.desc.replaceAll('/', ' ')}</p>
              <Social type="쇼호스트 진행문의" link="" />
            </article>

            <article className="section-2">
              <h2 className="left">
                라이브커머스 <br />
                주요경력
              </h2>
              <ul className="right">
                {modelData?.career.map(career => (
                  <li key={career.category}>
                    <h4>{career.category}</h4>
                    <ul>
                      {career.lives.map(lv => (
                        <li>
                          <p>{lv.platform}</p>
                          <a href={lv.link} target="_blank">
                            {lv.name}
                            <LinkIcon />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </article>

            <article className="section-3">
              <div className="img__wrapper_2">
                <iframe src={modelData?.liveClips[0].link}></iframe>
              </div>
              <div className="img__wrapper_3">
                <img src={modelData?.imageClips[1].link} alt="model_image-2" />
              </div>
            </article>

            <article className="section-4">
              <div className="img__wrapper_4">
                <img src={modelData?.imageClips[2].link} alt="model_image-3" />
              </div>
              <div className="img__wrapper_5">
                <iframe src={modelData?.liveClips[1].link}></iframe>
              </div>
            </article>
          </section>
          <article className="section-5"></article>
        </DetailBox>
      </section>
    </DetailLayoutContainer>
  );
}
