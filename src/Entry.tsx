import { IEntryForm, usePublic } from 'Public.Utils';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

const Component: FC = () => {
  const { onEntrySubmit } = usePublic();
  const { register, handleSubmit } = useForm<IEntryForm>({
    defaultValues: {
      username: ''
    }
  });
  return (
    <form onSubmit={handleSubmit(onEntrySubmit)}>
      <label htmlFor="username">
        <FormattedMessage id="username" />
      </label>
      <input autoFocus id="username" {...register('username')} />
    </form>
  );
};

export default Component;
