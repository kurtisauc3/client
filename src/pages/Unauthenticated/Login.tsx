import React, { FC, useContext } from 'react';
import Form from '../../core/components/Form';
import { AuthContext, ILogin } from '../../core/providers/Auth';

const Component: FC = () => {
  const { login } = useContext(AuthContext);

  return (
    <Form<ILogin>
      titleKey="login"
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
      onSubmit={login}
    />
  );
};

export default Component;
