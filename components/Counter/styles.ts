import styled from 'styled-components';

export const SocialBox = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  span {
    font-size: 18px;
  }
  svg {
    margin-left: 0.25rem;
  }
  &:hover {
    span {
      color: #e74c28;
    }
  }
  svg {
    circle {
      fill: #e74c28;
    }
  }
`;
