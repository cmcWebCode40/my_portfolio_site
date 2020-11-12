// ================================================================================
// Imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

// ================================================================================
// JSX Function
function OneVisitor() {
  return (
    <OneVisitorWrapper>
      <div>
        <div className="m-2">
          <div className="text-center">
            <div className="mx-2">
              <div className="row">
                <div className="col">
                  <FontAwesomeIcon icon={['fa', 'user-circle']} size="2x" className="icon" />
                </div>
                <div className="">
                  <p>Charles Avis</p>
                </div>
                <div className="col">
                  <FontAwesomeIcon icon={['fa', 'comment-alt']} size="1x" className="icon2" />
                </div>
                <div className="col">
                  <FontAwesomeIcon icon={['fa', 'info-circle']} size="1x" className="icon2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OneVisitorWrapper>
  );
}

export default OneVisitor;

// ================================================================================
// Styled components
const OneVisitorWrapper = styled.div`
  .icon {
    color: ${(props) => props.theme.colors.gray};
  }
  .icon2 {
    color: ${(props) => props.theme.colors.primary};
  }
`;
