import DefaultPicture from 'assets/images/DefaultPicture.png';
import { BLACK, TAN } from 'core/components/Colors';
import React, { FC } from 'react';
import styled from 'styled-components';

type TAvatar = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src?: string | null;
};

const Container = styled.img`
  border: 2px solid ${TAN};
  border-radius: 50%;
  background-color: ${BLACK};
  object-fit: contain;
  min-height: 80%;
  max-height: 80%;
  margin: 10%;
`;

const Component: FC<TAvatar> = (props) => {
  const { src, ...rest } = props;
  const imgSrc = src || DefaultPicture;
  return <Container {...rest} src={imgSrc} />;
};

export default Component;
