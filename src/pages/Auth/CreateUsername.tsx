import Form from 'core/components/Form';
import api from 'core/services/api';
import auth from 'core/services/auth';
import { useAppDispatch } from 'core/services/store';
import React, { FC } from 'react';

interface ICreateUsername {
  username: string;
}

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const { goTo } = auth.actions;

  return (
    <Form<ICreateUsername>
      titleKey="createUsername"
      fieldData={{
        username: {
          editorType: 'input',
          initialValue: '',
          props: {
            required: true
          }
        }
      }}
      onSubmit={({ username }) => {
        api.identity.attachNonLoginUniversalId(username, (result) => {
          if ('data' in result) {
            dispatch(goTo('authenticated'));
          }
        });
      }}
    />
  );
};

export default Component;
