import styled, { css } from 'styled-components';
import { responSiveSize } from 'utils/style_opt';

export const CategoryListBox = styled.ul`
  margin-top: 10rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 710px;

  @media ${responSiveSize.mobile} {
    -ms-overflow-style: none;
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-top: 6rem;
    position: absolute;
    padding-left: 16px;
    left: 0;
    right: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const CategoryItem = styled.li<{ selected: boolean }>`
  margin-right: 28px;
  font-size: 20px;
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: 28px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: underline;
  }
  ${({ selected }) =>
    selected &&
    css`
      background: #fa370b;
      color: #fff;
      padding: 8px 16px;
    `}
  @media ${responSiveSize.mobile} {
    white-space: nowrap;
    font-size: 13px;
    margin-right: 20px;
    margin-bottom: 0px;
  }
`;

export const CateFilterBtn = styled.button<{ open: boolean }>`
  position: sticky;
  bottom: 40px;
  left: 40px;
  background-color: #aaa;
  animation: slideup 0.3s ease-in-out;
  font-size: 20px;
  padding: 16px 24px;
  border-radius: 32px;
  background-color: #fa370b;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  @keyframes slideup {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(0px);
    }
  }
  ${({ open }) =>
    open &&
    css`
      background-color: #fff;
      color: #fa370b;
    `}

  @media ${responSiveSize.mobile} {
    font-size: 16px;
    left: 20px;
  }
`;
export const FilterContainer = styled.aside<{ open: boolean }>`
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #fa370b;
  transition: all 0.3s;
  width: 0px;
  min-height: 600px;
  overflow: hidden;
  opacity: 0;
  padding: 56px 40px 126px 40px;
  display: flex;
  flex-wrap: wrap;
  & > div:nth-of-type(1) {
    width: 60%;
  }
  ${({ open }) =>
    open &&
    css`
      width: 400px;
      min-height: 600px;
      bottom: 0px;
      left: 0px;
      opacity: 1;
    `};
`;

export const ModalCateItemBox = styled.div<{ selected: boolean }>`
  width: 50%;
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
  .checkbox {
    width: 18px;
    height: 18px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${({ selected }) =>
    selected &&
    css`
      font-weight: bold;
      .checkbox {
        border: 1px solid #000;
        background-color: #fff;
        color: #000;
      }
    `};
`;
