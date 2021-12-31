import Form from 'core/components/Form';
import api from 'core/services/api';
import auth from 'core/services/auth';
import { useAppDispatch } from 'core/services/store';
import React, { FC } from 'react';

interface IForgotPassword {
  email: string;
}

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const { goTo } = auth.actions;

  return (
    <Form<IForgotPassword>
      titleKey="forgotPassword"
      fieldData={{
        email: {
          editorType: 'input',
          initialValue: '',
          props: {
            required: true,
            type: 'email'
          }
        }
      }}
      onSubmit={({ email }) => {
        api.authentication.resetEmailPassword(email, (result) => {
          if ('data' in result) {
            dispatch(goTo('emailSent'));
          }
        });
      }}
    />
  );
};

export default Component;
