import React from 'react';
import styled from 'styled-components';

type Props = {
  href: string;
  children: React.ReactNode;
};

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 32px;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  color: var(--black);
  border: 2px solid var(--black);
  border-radius: 9999px;

  &:hover {
    border: none;
    background-color: var(--red);
    background-image: var(--strong-bliss);
    color: white;
  }
`;

export const ButtonLink = ({ href, children }: Props) => {
  return <StyledButton href={href}>{children}</StyledButton>;
};
