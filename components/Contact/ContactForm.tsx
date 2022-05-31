import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import TagManager from 'react-gtm-module';
import Input from 'components/Common/Input';
import Textarea from 'components/Common/Textarea';
import useInput from 'hooks/useInput';
import { ContactFormContainer } from './styles';
import useAsync from 'hooks/useAsync';
import { sendContact } from 'utils/requests';
import ResultModal from 'components/Common/ResultModal';
import PrivacyModal from 'components/Common/PrivacyModal';
import { useRouter } from 'next/dist/client/router';

export default function ContactForm(): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [checked, setChecked] = useState(false);
  const [name, onChangeName, setName] = useInput('');
  const [email, onChangeEmail, setEmail] = useInput('');
  const [phone, onChangePhone, setPhone] = useInput('');
  const [company, onChangeCompany, setCompany] = useInput('');
  const [content, onChangeContent, setContent] = useInput('');
  const [valid, setValid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prModalOpen, setPrModalOpen] = useState(false);
  const [contactId, setContactId] = useState('');

  const router = useRouter();
  const isContact = router.route === '/contact';

  const onClose = () => {
    setChecked(false);
    setName('');
    setEmail('');
    setPhone('');
    setContent('');
    setCompany('');
    setValid(false);

    setModalOpen(false);
  };

  const [state, fetch] = useAsync(sendContact, {
    name,
    email,
    tel: phone,
    info: content,
    company,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checked) return;
    if (!name.trim()) return;
    if (!email.trim()) return;
    if (!phone.trim()) return;
    if (!content.trim()) return;
    if (!company.trim()) return;

    fetch();

    TagManager.dataLayer({ dataLayer: { event: 'submitForm' } });
  };

  useEffect(() => {
    if (!checked) return setValid(false);
    if (!name.trim()) return setValid(false);
    if (!email.trim()) return setValid(false);
    if (!phone.trim()) return setValid(false);
    if (!content.trim()) return setValid(false);
    if (!company.trim()) return setValid(false);
    setValid(true);
  }, [name, email, phone, company, content, checked]);

  useEffect(() => {
    if (state.loading) return setValid(false);
    else if (state.success) {
      setModalOpen(true);
      setContactId(state.success._id);
    }
  }, [state]);
  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        '#contact_content',
        { height: 0, opacity: 0 },
        { height: 330, duration: 0.7, opacity: 1, delay: 0.5 }
      );
      gsap.fromTo(
        '.contact_input',
        { flex: 0, opacity: 0 },
        { flex: 1, duration: 1.7, opacity: 1 }
      );
    }
  }, [inView, ref]);

  useEffect(() => {
    if (prModalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';
    }
  }, [prModalOpen]);
  return (
    <>
      <ContactFormContainer ref={ref} id="contact__form">
        <form onSubmit={onSubmit}>
          <div className="contact__field">
            <Input
              className="contact_input invinsible"
              placeholder="담당자 이름"
              value={name}
              onChange={onChangeName}
            />
            <Input
              className="contact_input invinsible"
              placeholder="연락처"
              type="tel"
              value={phone}
              onChange={onChangePhone}
            />
          </div>
          <div className="contact__field">
            <Input
              className="contact_input invinsible"
              placeholder="기업/브랜드명"
              value={company}
              onChange={onChangeCompany}
            />
            <Input
              className="contact_input invinsible"
              placeholder="이메일"
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <Textarea
            id="contact_content"
            height={320}
            placeholder="프로젝트 내용, 일정등 자세한 정보를 알려주세요"
            value={content}
            onChange={onChangeContent}
          />
          <div className="term_box">
            <input
              type="checkbox"
              checked={checked as boolean}
              onChange={() => setChecked(prev => !prev)}
            />
            <strong
              style={isContact ? { color: '#000' } : {}}
              onClick={() => setPrModalOpen(true)}
            >
              개인정보 수집 및 이용약관
            </strong>
            {prModalOpen && <PrivacyModal onClose={() => setPrModalOpen(false)} />}
            <span style={isContact ? { color: '#000' } : {}}>에 동의합니다.</span>
          </div>
          <button disabled={!valid}>
            {state.loading ? 'loading' : '라이브대행 문의하기'}
          </button>
        </form>
      </ContactFormContainer>
      {modalOpen && <ResultModal contactId={contactId} onClose={onClose} />}
    </>
  );
}
