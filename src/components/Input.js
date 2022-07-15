import styled from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;

  padding: 0 16px;

  border: 2px solid #FFF;
  border-radius: 4px;
  outline: none;

  background: ${({ theme }) => theme.colors.inputBackground};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  font-size: 16px;

  transition: all .2s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    transition: all .2s ease-in;
  }
`;
