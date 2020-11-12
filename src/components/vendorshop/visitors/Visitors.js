// ================================================================================
// Imports
import React from 'react';
import styled from 'styled-components';
import OneVisitor from './OneVisitor';

// ================================================================================
// JSX Function
const Visitors = ({ mobile }) => {
  return (
    <>
      {!mobile && (
        <>
          <h4 className="text-dark text-center">Visitors</h4>
          <Divider />
        </>
      )}

      <OneVisitor />
      <OneVisitor />
      <OneVisitor />
      <OneVisitor />
    </>
  );
};

export default Visitors;

// ================================================================================
// Styled components
const Divider = styled.hr`
  background: ${(props) => props.theme.colors.gray};
  border-radius: ${(props) => props.theme.styles.borderRadius};
  height: 0.2rem;
  margin: 0.7rem 2rem;
`;
