import { ILoginForm, usePublic } from 'Public.Utils';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

const Component: FC = () => {
  const { onLoginSubmit } = usePublic();
  const { register, handleSubmit } = useForm<ILoginForm>({
    defaultValues: {
      password: ''
    }
  });
  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <label htmlFor="password">
        <FormattedMessage id="password" />
      </label>
      <input autoFocus id="password" {...register('password')} />
    </form>
  );
};

export default Component;
