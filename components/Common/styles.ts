import styled, { css } from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const InputBox = styled.div`
  height: 4.125rem;
  input {
    height: 100%;
    width: 100%;
    font-size: 32px;
    border: none;
    outline: none;
    border-bottom: 3px solid #838383;
    border-radius: 0;
    &::placeholder {
      color: #838383;
    }
  }
  @media ${responSiveSize.mobile} {
    input {
      font-size: 20px;
    }
  }
`;

export const TextareaBox = styled.div<{ height?: number }>`
  width: 100%;
  height: 100%;
  textarea {
    padding: 1rem 0;
    font-family: sans-serif;
    letter-spacing: 0.9px;
    min-height: 6.25rem;
    font-size: 32px;
    width: 100%;
    height: 100%;
    resize: none;
    outline: none;
    border: none;
    border-bottom: 3px solid #838383;
  }
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
  @media ${responSiveSize.mobile} {
    textarea {
      font-size: 20px;
      min-height: 3.25rem;
      height: 70%;
    }
  }
`;

export const ButtonBox = styled.button`
  border-radius: 0.5rem;
  font-size: 32px;
  font-weight: 500;
  outline: none;
  border: none;
  color: #fff;
  padding: 1rem 2rem;
  cursor: pointer;
  background-color: #ef242f;
  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
  @media ${responSiveSize.mobile} {
    font-size: 20px;
  }
`;
