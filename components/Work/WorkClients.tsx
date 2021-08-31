import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { clientsData } from 'utils/clientData';
import ClientLogo from './ClientLogo';
import { WorkClientsContainer } from './styles';

export default function WorkClients(): JSX.Element {
  const [blackMode, setBlackMode] = useState(false);
  const { inView, ref } = useInView({ threshold: 0.35 });
  const { inView: inView2, ref: ref2 } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  useEffect(() => {
    const header = document.querySelectorAll('.main_header') as NodeListOf<HTMLElement>;
    const nextEl = document.querySelectorAll('.client_nh') as NodeListOf<HTMLElement>;
    if (!nextEl) return;
    if (!header) return;

    if (inView && ref) {
      setBlackMode(true);
      document.body.style.backgroundColor = '#26262e';
      gsap.set(header, {
        duration: 0.5,
        color: '#fff',
        fill: '#fff',
        stroke: '#fff',
      });
      gsap.set(nextEl, {
        duration: 0.5,
        color: '#fff',
        fill: '#fff',
        backgroundColor: '#26262e',
      });
    } else {
      setBlackMode(false);
      document.body.style.backgroundColor = '#fff';
      gsap.set(header, {
        duration: 0.5,
        color: '#000',
        fill: '#000',
        stroke: '#000',
      });
      gsap.set(nextEl, {
        duration: 0.5,
        color: '#000',
        fill: '#000',
        backgroundColor: '#fff',
      });
    }
    return () => {
      header.forEach(el => {
        el.style.color = '';
        el.style.fill = '';
      });
    };
  }, [inView, ref]);

  useEffect(() => {
    if (inView2 && ref2) {
      gsap.fromTo(
        '.client_title',
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );
    }
  }, [inView2, ref2]);

  useEffect(() => {
    const icons = document.querySelectorAll('.client_icon') as NodeListOf<HTMLElement>;
    if (inView) {
      icons.forEach(icon => {
        const delay = Math.random() * 0.7 + 0.15;
        gsap.fromTo(icon, { opacity: 0, scale: 0.8 }, { scale: 1, opacity: 1, delay });
      });
    }
  }, [inView, ref]);

  return (
    <WorkClientsContainer blackMode={blackMode}>
      <h3 className="client_title invinsible" ref={ref2}>
        Our Clients
      </h3>
      <ul ref={ref}>
        {clientsData.map(client => (
          <li key={client.id} className="client_icon">
            <ClientLogo src={client.src} name={client.name} />
          </li>
        ))}
      </ul>
      <p>And More Than 77 Brands</p>
    </WorkClientsContainer>
  );
}
