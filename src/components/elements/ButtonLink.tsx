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
  user-select: none;
  color: var(--black);
  border: 2px solid var(--black);
  border-radius: 9999px;

  &:hover {
    border: none;
    color: white;
    background-color: ${(props) =>
      props.href ? 'var(--red)' : 'var(--black)'};
    background-image: ${(props) =>
      props.href ? 'var(--strong-bliss)' : 'var(--black)'};
    cursor: ${(props) => !props.href && 'not-allowed'};
    transition: 500ms;

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
