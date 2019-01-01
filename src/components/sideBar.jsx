import React from 'react';
import styled from 'styled-components';

const StyledPinsList = styled.ul`
  color: palevioletred;
  font-weight: bold;
  list-style-type: none;
`;

const StyledPinsItem = styled.li`
  background: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const SideBar = ({ className }) => {
  return (
    <StyledPinsList className={className}>
      <StyledPinsItem>Accomodation</StyledPinsItem>
      <StyledPinsItem>Europe park</StyledPinsItem>
      <StyledPinsItem>Lake titisie</StyledPinsItem>
    </StyledPinsList>
  );
};

export default SideBar;
