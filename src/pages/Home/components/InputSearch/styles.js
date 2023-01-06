import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input{
    width: 100%;
    padding: 0 16px;
    background: ${({ theme }) => theme.colors.inputBackground};
    border: none;
    outline: 0;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder{
      color: #BCBCBC;
    }
  }
`;
