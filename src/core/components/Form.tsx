import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

type TFormData<T> = {
  [key in keyof T]: string;
};

type TInputFieldData<T extends TFormData<T>> = {
  [key in keyof T]: {
    editorType: 'input';
    initialValue: string;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
  };
};

type TFormProps<T extends TFormData<T>> = Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  'onSubmit'
> & {
  titleKey: string;
  fieldData: TInputFieldData<T>;
  onSubmit: (data: TFormData<T>) => void;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
`;

const FormContainer = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  font-size: 30px;
  text-align: center;
  width: 100%;
  margin: 20px 0;
`;
const InputContainer = styled.div`
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
const ButtonContainer = styled.div`
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

const Component = <T extends TFormData<T>>(props: TFormProps<T>) => {
  const { titleKey, onSubmit, fieldData, ...rest } = props;
  const keys = Object.keys(fieldData) as Array<keyof T>;
  const initialValues = keys.reduce(
    (obj, key) => ({ ...obj, [key]: fieldData[key].initialValue }),
    {} as TFormData<T>
  );
  const [formData, setFormData] = useState(initialValues);

  return (
    <Container>
      <FormContainer
        {...rest}
        onSubmit={(e) => {
          e.preventDefault();
          // handle isValid
          onSubmit(formData);
        }}
      >
        <TitleContainer>
          <FormattedMessage id={titleKey} />
        </TitleContainer>
        {keys.map((key) => {
          switch (fieldData[key].editorType) {
            case 'input':
              return (
                <InputContainer key={String(key)}>
                  <label htmlFor={String(key)}>
                    <FormattedMessage id={String(key)} />
                  </label>
                  <input
                    {...fieldData[key].props}
                    name={String(key)}
                    onChange={({ target: { name, value } }) => {
                      setFormData((data) => ({ ...data, [name]: value }));
                    }}
                    id={String(key)}
                    value={formData[key] as string}
                  />
                </InputContainer>
              );
          }
        })}
        <ButtonContainer>
          <button type="submit">→</button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Component;
