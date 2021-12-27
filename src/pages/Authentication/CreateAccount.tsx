import Form from 'core/components/Form';
import { AuthContext, ICreateAccount } from 'core/providers/Auth';
import React, { FC, useContext } from 'react';

const Component: FC = () => {
  const { createAccount } = useContext(AuthContext);

  return (
    <Form<ICreateAccount>
      titleKey="createAccount"
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
      onSubmit={createAccount}
    />
  );
};

export default Component;
