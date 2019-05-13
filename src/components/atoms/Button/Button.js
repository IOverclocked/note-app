import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.6em;
  text-transform: uppercase;
  padding: 0;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey100};
      width: 105px;
      height: 30px;
      font-size: 1em;
    `}
`;

export default Button;
