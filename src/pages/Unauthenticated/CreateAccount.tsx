import React, { FC, useContext } from 'react';
import Form from '../../core/components/Form';
import { AuthContext, ILogin } from '../../core/providers/Auth';

const Component: FC = () => {
  const { createAccount } = useContext(AuthContext);

  return (
    <Form<ILogin>
      titleKey="createAccount"
      fieldData={{
        username: {
          editorType: 'input',
          initialValue: '',
          props: {
            required: true
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
