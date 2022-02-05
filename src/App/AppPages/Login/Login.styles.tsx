import Colors from 'core/components/Colors';
import styled from 'styled-components';

export const LOGIN_WIDTH = '400px';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  background-color: ${Colors.WHITE};
`;
export const LoginContainer = styled.div`
  position: relative;
  width: ${LOGIN_WIDTH};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CoverContainer = styled.div`
  flex-grow: 1;
  img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
`;
export const LogoContainer = styled.div`
  img {
    object-fit: contain;
    min-width: 100%;
    max-width: 100%;
  }
`;

export const FormContainer = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  font-size: 30px;
  text-align: center;
  width: 100%;
  margin: 20px 0;
`;
export const InputContainer = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 8px;
  margin: 5px 0;
  border: 2px solid rgba(0, 0, 0, 0);
  &:focus-within {
    background: none;
    border: 2px solid #353839;
    label {
      font-size: 12px;
    }
  }
  label {
    color: rgba(0, 0, 0, 0.5);
  }
  input {
    font-weight: bold;
    font-size: 18px;
    width: 100%;
    padding: 5px 0;
  }
`;
export const ButtonContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border-radius: 15px;
    padding: 20px 25px;
    font-size: 30px;
    color: white;
    background: #ff4026;
    border-color: #ff4026;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
    &:disabled {
      color: rgba(0, 0, 0, 0.1);
      background: none;
      border: 2px solid rgba(0, 0, 0, 0.1);
      cursor: default;
      :hover {
        opacity: 1;
      }
    }
  }
`;

export const CheckboxContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    margin: 0 10px;
  }
`;

export const VersionContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  opacity: 0.5;
`;
