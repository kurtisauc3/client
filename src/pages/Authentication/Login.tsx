import Form from 'core/components/Form';
import { AuthContext, ILogin } from 'core/providers/Auth';
import React, { FC, useContext } from 'react';

const Component: FC = () => {
  const { login } = useContext(AuthContext);

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
      onSubmit={login}
    />
  );
};

export default Component;
