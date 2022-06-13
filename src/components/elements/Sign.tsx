import React from 'react';
import styled from 'styled-components';

const StyledSign = styled.div`
  position: absolute;
  right: 0;
  left: 78%;
  height: 640px;
  font-size: 640px;
  font-weight: bold;
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
  z-index: -1;
`;

const Sign = () => {
  return <StyledSign>o</StyledSign>;
};

export default Sign;
