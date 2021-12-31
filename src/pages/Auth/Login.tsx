import Form from 'core/components/Form';
import api from 'core/services/api';
import auth from 'core/services/auth';
import { useAppDispatch } from 'core/services/store';
import React, { FC } from 'react';

interface ILogin {
  email: string;
  password: string;
}

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const { goTo } = auth.actions;

  return (
    <Form<ILogin>
      titleKey="login"
      fieldData={{
        email: {
          editorType: 'input',
          initialValue: '',
          props: {
            required: true,
            type: 'email'
          }
        },
        password: {
          editorType: 'input',
          initialValue: '',
          props: {
            type: 'password',
            required: true
          }
        }
      }}
      onSubmit={({ email, password }) => {
        api.authentication.authenticateEmailPassword(email, password, false, (result) => {
          if ('data' in result) {
            dispatch(goTo('authenticated'));
          }
        });
      }}
    />
  );
};

export default Component;
