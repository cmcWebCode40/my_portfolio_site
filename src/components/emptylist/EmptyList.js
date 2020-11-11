import React from 'react';
import styled from 'styled-components';
import emptyImg from '../../assets/images/empty-folder.svg';

const TableWrapper = styled.div`
  box-shadow:${(props) => props.theme.styles.boxShadow};
  height:300px;
  border-radius:${(props) => props.theme.styles.borderRadius};
  .cursor-btn{
    cursor:pointer;
  }

  p{
    font-size:1.2rem;
    text-align:center;
    margin:1rem 0;
  }

`;

export const EmptyList = ({
  text,
  imageFile,
  height,
}) => {
  return (
    <TableWrapper>
      <div className="my-auto">
        <img
          className=""
          height={height}
          src={imageFile}
          alt="Empty List"
        />
      </div>
      <p>{text}</p>
    </TableWrapper>
  );
};

EmptyList.defaultProps = {
  color: 'primary',
  link: '#',
  height: '150',
  text: 'Not Item found',
  variant: 'text',
  imageFile: emptyImg,
};
