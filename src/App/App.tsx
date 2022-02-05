import { FC } from 'react';
import AppPages from './AppPages';
import GlobalStyle from './GlobalStyle';
import Loading from './Loading';
import Notify from './Notify';

const Component: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Loading />
      <Notify />
      <AppPages />
    </>
  );
};

export default Component;
