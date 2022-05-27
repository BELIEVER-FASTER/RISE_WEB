import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function aboutVideoProcess(): JSX.Element {
  useEffect(() => {
    const list1 = document.querySelector('.list_1') as HTMLLIElement;
    const list2 = document.querySelector('.list_2') as HTMLLIElement;
    const list3 = document.querySelector('.list_3') as HTMLLIElement;
    const list4 = document.querySelector('.list_4') as HTMLLIElement;
    const list5 = document.querySelector('.list_5') as HTMLLIElement;
    const a = gsap
      .timeline({ yoyo: true })
      .set('.list_1', {
        scrollTrigger: {
          trigger: '.section5',
          scrub: 0.2,
          start: '-5% 0%',
          end: '5% 0%',
          onEnterBack: () => {
            list2.classList.remove('active');
            list1.classList.add('active');
          },
          onLeaveBack: () => {
            list1.classList.remove('active');
          },
          onEnter: () => {
            list1.classList.add('active');
          },
        },
      })
      .set('.list_2', {
        scrollTrigger: {
          trigger: '.section5',
          scrub: 0.2,
          start: '12% 0%',
          end: '17% 0%',
          onEnterBack: () => {
            list3.classList.remove('active');
            list2.classList.add('active');
          },
          onEnter: () => {
            list1.classList.remove('active');
            list2.classList.add('active');
          },
        },
      })
      .fromTo(
        '.list_3',
        {},
        {
          scrollTrigger: {
            trigger: '.section5',
            scrub: 0.2,
            start: '25% 0%',
            end: '30% 0%',
            onEnterBack: () => {
              list4.classList.remove('active');
              list3.classList.add('active');
            },
            onEnter: () => {
              list2.classList.remove('active');
              list3.classList.add('active');
            },
          },
        }
      )
      .fromTo(
        '.list_4',
        {},
        {
          scrollTrigger: {
            trigger: '.section5',
            scrub: 0.2,
            start: '43% 0%',
            end: '48% 0%',
            onEnterBack: () => {
              list5.classList.remove('active');
              list4.classList.add('active');
            },
            onEnter: () => {
              list3.classList.remove('active');
              list4.classList.add('active');
            },
          },
        }
      )
      .fromTo(
        '.list_5',
        {},
        {
          scrollTrigger: {
            trigger: '.section5',
            scrub: 0.2,
            start: '60% 0%',
            end: '80% 0%',
            onEnterBack: () => {
              list4.classList.remove('active');
              list5.classList.add('active');
            },
            onEnter: () => {
              list4.classList.remove('active');
              list5.classList.add('active');
            },
            onLeave: () => {
              list5.classList.remove('active');
            },
          },
        }
      );
    return () => {
      a.clear();
    };
  }, []);
  return <></>;
}
