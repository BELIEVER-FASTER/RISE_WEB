import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import dayjs from 'dayjs';
import Button from 'components/Common/Button';
import Input from 'components/Common/Input';
import Textarea from 'components/Common/Textarea';
import useInput from 'hooks/useInput';
import { ContactFormContainer } from './styles';
import CustomSelect from 'components/Common/CustomSelect';
import { budgetOptions } from 'utils/inputData';
import DatePick from '../Common/DatePick';

export default function ContactForm(): JSX.Element {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [checked, setChecked] = useState(false);
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [phone, onChangePhone] = useInput('');
  const [company, onChangeCompany] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [valid, setValid] = useState(false);
  const [budget, setBudget] = useState('광고예산');
  const [startDate, setStartDate] = useState<string>(
    dayjs(new Date()).format('YYYY-MM-DD')
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checked) return;
    if (!name.trim()) return;
    if (!email.trim()) return;
    if (!phone.trim()) return;
    if (!content.trim()) return;
    if (!company.trim()) return;
    if (!budget.trim()) return;
    if (!startDate) return;
    console.log({
      checked,
      name,
      email,
      phone,
      content,
      company,
      budget,
      startDate,
    });
  };

  useEffect(() => {
    if (!checked) return setValid(false);
    if (!name.trim()) return setValid(false);
    if (!email.trim()) return setValid(false);
    if (!phone.trim()) return setValid(false);
    if (!content.trim()) return setValid(false);
    if (!company.trim()) return setValid(false);
    if (!budget.trim()) return setValid(false);
    if (!startDate) return setValid(false);
    setValid(true);
  }, [name, email, phone, company, content, checked]);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        '#contact_content',
        { height: 3, y: 150 },
        { height: 330, y: 0, duration: 1, opacity: 1 }
      );
      gsap.fromTo(
        '.contact_input',
        { flex: 0 },
        { flex: 1, y: 0, duration: 1.5, opacity: 1 }
      );
      gsap.fromTo(
        '.budget_input',
        { flex: 0 },
        { flex: 1, y: 0, duration: 1.5, opacity: 1 }
      );
      gsap.fromTo(
        '.date_input',
        { flex: 0 },
        { flex: 1, y: 0, duration: 1.5, opacity: 1 }
      );
    }
  }, [inView]);

  return (
    <ContactFormContainer ref={ref} id="contact__form">
      <form onSubmit={onSubmit}>
        <h3>예산과 일정에 대해 알려주세요.</h3>
        <div className="budget__field">
          <CustomSelect
            className="budget_input invinsible"
            placeholder="광고예산"
            value={budget}
            setValue={setBudget}
            options={budgetOptions}
          />
          <DatePick
            className="date_input invinsible"
            value={startDate}
            setValue={setStartDate}
          />
        </div>
        <h3>간단한 정보를 입력해 주세요.</h3>
        <div className="contact__field">
          <Input
            className="contact_input invinsible"
            placeholder="이름"
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
          <a target="_blank" href="/">
            개인정보 수집 및 이용약관
          </a>
          <span>에 동의합니다.</span>
        </div>
        <Button label="문의하기" type="submit" disabled={!valid} />
      </form>
    </ContactFormContainer>
  );
}
