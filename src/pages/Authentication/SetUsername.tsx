import Form from 'core/components/Form';
import { AuthContext, ISetUsername } from 'core/providers/Auth';
import React, { FC, useContext } from 'react';

const Component: FC = () => {
  const { setUsername } = useContext(AuthContext);

  return (
    <Form<ISetUsername>
      titleKey="setUsername"
      fieldData={{
        username: {
          editorType: 'input',
          initialValue: '',
          props: {
            required: true
          }
        }
      }}
      onSubmit={setUsername}
    />
  );
};

export default Component;
