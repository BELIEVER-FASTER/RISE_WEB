import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { clientsData } from 'utils/clientData';
import ClientLogo from './ClientLogo';
import { WorkClientsContainer } from './styles';

export default function WorkClients(): JSX.Element {
  const [blackMode, setBlackMode] = useState(false);
  const { inView, ref } = useInView({ threshold: 0.35 });

  useEffect(() => {
    const header = document.querySelectorAll('.main_header') as NodeListOf<HTMLElement>;
    const nextEl = document.querySelectorAll('.client_nh') as NodeListOf<HTMLElement>;
    if (!nextEl) return;
    if (inView) {
      setBlackMode(true);
      document.body.style.backgroundColor = '#26262e';
      nextEl.forEach(el => {
        el.style.color = '#fff';
        el.style.fill = '#fff';
        el.style.backgroundColor = '#26262e';
      });
      header.forEach(el => {
        el.style.color = '#fff';
        el.style.fill = '#fff';
      });
    } else {
      setBlackMode(false);
      document.body.style.backgroundColor = '#fff';
      nextEl.forEach(el => {
        el.style.color = '#000';
        el.style.fill = '#000';
        el.style.backgroundColor = '#fff';
      });
      header.forEach(el => {
        el.style.color = '#000';
        el.style.fill = '#000';
      });
    }
  }, [inView, ref]);

  useEffect(() => {
    const icons = document.querySelectorAll('.client_icon') as NodeListOf<HTMLElement>;
    if (inView) {
      icons.forEach(icon => {
        const delay = Math.random() * 0.7 + 0.15;
        gsap.fromTo(icon, { opacity: 0, scale: 0.8 }, { scale: 1, opacity: 1, delay });
      });
    }
  }, [inView]);

  return (
    <WorkClientsContainer blackMode={blackMode}>
      <h3>Our Clients</h3>
      <ul ref={ref}>
        {[...clientsData, ...clientsData, ...clientsData, ...clientsData].map(
          (client, index) => (
            <li key={index} className="client_icon">
              <ClientLogo src={client.src} name={client.name} />
            </li>
          )
        )}
      </ul>
      <p>And More Than 77 Brands</p>
    </WorkClientsContainer>
  );
}
