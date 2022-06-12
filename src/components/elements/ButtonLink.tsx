import React from 'react';
import styled from 'styled-components';

type Props = {
  href: string;
  children: React.ReactNode;
};

const StyledButton = styled.a`
  display: inline-block;
  width: 120px;
  height: 32px;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  background-color: var(--grey);
  border-radius: 9999px;
  padding: 9px 0;
  margin: 0;
`;

export const ButtonLink = ({ href, children }: Props) => {
  return <StyledButton href={href}>{children}</StyledButton>;
};
