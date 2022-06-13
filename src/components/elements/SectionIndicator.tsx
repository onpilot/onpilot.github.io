import React from 'react';
import styled from 'styled-components';

const StyledSectionIndicator = styled.div`
  position: fixed;
  top: 340px;
  right: 40px;
  z-index: 1;
`;

const container = {
  display: 'flex',
  alignItems: 'center',
  height: '40px',
};
const line = {
  width: '60px',
  height: '4px',
  backgroundColor: 'var(--red)',
  marginRight: '10px',
};
const lineInac = {
  width: '60px',
  height: '4px',
  marginRight: '10px',
};
const number = {
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  fontSize: '20px',
  color: 'var(--grey)',
};
const numberAc = {
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  fontSize: '20px',
};

const SectionIndicator = () => {
  return (
    <StyledSectionIndicator id='indicator'>
      <div style={container}>
        <div style={line} />
        <div style={numberAc}>01</div>
      </div>
      <div style={container}>
        <div style={lineInac} />
        <div style={number}>02</div>
      </div>
    </StyledSectionIndicator>
  );
};

export default SectionIndicator;
