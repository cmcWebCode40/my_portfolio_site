import styled from 'styled-components';

export const ProductDetailsWrapper = styled.div`
  box-shadow: ${(props) => props.theme.styles.boxShadow};
  border-radius:${(props) => props.theme.styles.borderRadius};
  padding:1rem 1.3rem;
  margin:.6rem 0 0 0;

  label{
    display: block;
    font-weight:600;
    margin:.3rem 0 ;
  }
  
  .filepond-image{
   height:20vh;
   margin:.6rem 0 0 0;
  }
`;
