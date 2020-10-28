import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Divider = styled.hr`
  background:${(props) => props.theme.colors.gray};
  border-radius:${(props) => props.theme.styles.borderRadius};
  height:.2rem;
  margin:.7rem 2rem  ;
`;

const VisitorsWrapper = styled.div`

.icon{
  color:${(props) => props.theme.colors.gray};
  }
.icon2{
  color:${(props) => props.theme.colors.primary};
  }

`;

const Visitors = ({ mobile }) => {
  return (
    <VisitorsWrapper>
      {!mobile && (
      <>
        <h4 className="text-dark text-center">Visitors</h4>
        <Divider />
      </>
      )}

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
    </VisitorsWrapper>
  );
};

export default Visitors;
