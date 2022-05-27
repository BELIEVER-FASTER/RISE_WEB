import dynamic from 'next/dynamic';
import React from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { ContactContainer } from './styles';

const ContactAnimation = dynamic(() => import('components/Contact/ContactAnimation'), {
  ssr: false,
});

export default function ContactLayout(): JSX.Element {
  return (
    <ContactContainer>
      <ContactBanner />
      <ContactInfo />
      <ContactAnimation />
      <section className="contact_title">
        <h3>간단한 정보를 입력해주세요</h3>
      </section>

      <ContactForm />
    </ContactContainer>
  );
}
