import Form from 'core/components/Form';
import { AuthContext, IForgotPassword } from 'core/providers/Auth';
import React, { FC, useContext } from 'react';

const Component: FC = () => {
  const { forgotPassword } = useContext(AuthContext);

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
      onSubmit={forgotPassword}
    />
  );
};

export default Component;
