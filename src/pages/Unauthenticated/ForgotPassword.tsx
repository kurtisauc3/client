import React, { FC, useContext } from 'react';
import Form from '../../core/components/Form';
import { AuthContext, IForgotPassword } from '../../core/providers/Auth';

const Component: FC = () => {
  const { forgotPassword } = useContext(AuthContext);

  return (
    <Form<IForgotPassword>
      titleKey="forgotPassword"
      fieldData={{
        username: {
          editorType: 'input',
          initialValue: '',
          props: {
            required: true
          }
        }
      }}
      onSubmit={forgotPassword}
    />
  );
};

export default Component;
