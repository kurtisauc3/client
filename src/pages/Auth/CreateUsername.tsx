import Form from 'core/components/Form';
import api from 'core/services/api';
import { useAppDispatch } from 'core/services/store';
import user from 'core/services/user';
import React, { FC } from 'react';

interface ICreateUsername {
  username: string;
}

const Component: FC = () => {
  const dispatch = useAppDispatch();
  const { goTo } = user.actions;

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
            dispatch(goTo('idle'));
          }
        });
      }}
    />
  );
};

export default Component;
