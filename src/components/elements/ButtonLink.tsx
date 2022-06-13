import React from 'react';
import styled from 'styled-components';

type Props = {
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
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

    & svg {
      fill: currentColor;
    }
  }
`;

const StyledIcon = styled.i`
  height: 12px;
  margin-right: 4px;

  & svg {
    height: 12px;
  }
`;

export const ButtonLink = ({ href, children, icon }: Props) => {
  return (
    <StyledButton href={href} target='_blank'>
      {icon ? (
        <>
          <StyledIcon>{icon}</StyledIcon>
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </StyledButton>
  );
};
