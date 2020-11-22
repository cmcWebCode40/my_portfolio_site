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
  display:flex;
  flex-flow:column nowrap;

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
  style,
}) => {
  return (
    <TableWrapper style={style}>
      <div className="my-auto">
        <img
          className="py-4"
          height={height}
          src={imageFile}
          alt="Empty List"
        />
        <p>{text}</p>
      </div>
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
