import styled from '@emotion/styled';

export const FormContainer = styled.div`
  margin: 30px auto;
  padding: 16px;
  display: flex;
  justify-content: center;
  width: 360px;
  box-shadow: inset -3px -3px 3px #abf402, inset 3px 3px 3px #0359ef;
  border-radius: 4px;
`;

export const Form = styled.form`
  width: 320px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #002aff;
  color: #000000;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #5f4f7a;
    color: #fff;
  }
`;
